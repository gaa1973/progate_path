// ユーザー関連のルート（ページ表示・CRUD操作）を定義
import express, {RequestHandler} from "express";
import {join} from "node:path";
import multer from "multer"; // ファイルアップロード処理
import {nanoid} from "nanoid"; // ファイル名生成用にユニークなIDを生成
import {User} from "@/models/user";
import {
  isUniqueEmail,
  ensureAuthUser,
  forbidAuthUser,
} from "@/middlewares/authentication";
import {ensureCorrectUser} from "@/middlewares/current_user";
import {body, validationResult} from "express-validator";
import {HashPassword} from "@/lib/hash_password";

export const userRouter = express.Router();

/**
 * GET /users
 * ログイン済みユーザーのみアクセス可能
 * 全ユーザーの一覧ページを表示
 */
userRouter.get("/", ensureAuthUser, async (req, res) => {
  const users = await User.all();
  res.render("users/index", {
    users,
  });
});

/**
 * POST /users
 * ユーザーサインアップエンドポイント
 * ログイン済みユーザーはアクセス不可
 * name, email, password のバリデーション実施
 * メールアドレスの一意性をチェック
 */
userRouter.post(
  "/",
  forbidAuthUser,
  body("name", "Name can't be blank").notEmpty(),
  body("email", "Email can't be blank").notEmpty(),
  body("password", "Password can't be blank").notEmpty(),
  body("email").custom(isUniqueEmail),
  async (req, res) => {
    const {name, email, password} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("users/new", {
        user: {
          name,
          email,
          password,
        },
        errors: errors.array(),
      });
    }
    // パスワードをハッシュ化して新規ユーザーを作成
    const hashPassword = await new HashPassword().generate(password);
    const user = new User(name, email, hashPassword);
    await user.save();

    // ユーザーをログイン状態にして、成功メッセージを表示してリダイレクト
    req.authentication?.login(user);
    req.dialogMessage?.setMessage("You have signed up successfully");
    res.redirect(`/users/${user.id}`);
  },
);

/**
 * GET /users/:userId
 * ログイン済みユーザーのみアクセス可能
 * 特定ユーザーの詳細情報とそのユーザーが投稿した全ツイートを表示
 */
userRouter.get("/:userId", ensureAuthUser, async (req, res, next) => {
  const {userId} = req.params;
  const user = await User.find(Number(userId));
  if (!user) return next(new Error("Invalid error: The user is undefined."));
  // ユーザーの全投稿を取得
  const posts = await user.posts();
  const postsWithUser = await Promise.all(
    posts.map(async post => {
      const user = await post.user();
      return {
        ...post,
        user,
      };
    }),
  );
  res.render("users/show", {
    user,
    posts: postsWithUser,
    activeTab: "posts",
  });
});

/**
 * GET /users/:userId/likes
 * 特定ユーザーが「いいね」した全ツイートを表示
 */
userRouter.get("/:userId/likes", async (req, res, next) => {
  const {userId} = req.params;
  const user = await User.find(Number(userId));
  if (!user) return next(new Error("Invalid error: The user is undefined."));
  // ユーザーが「いいね」した投稿一覧を取得
  const posts = await user.likedPosts();
  const postsWithUser = await Promise.all(
    posts.map(async post => {
      const user = await post.user();
      return {
        ...post,
        user,
      };
    }),
  );
  res.render("users/show", {
    user,
    posts: postsWithUser,
    activeTab: "likes",
  });
});

/**
 * GET /users/:userId/edit
 * ログイン済みユーザーのみアクセス可能
 * 本人のみ編集可能（ensureCorrectUser ミドルウェア）
 * ユーザー編集フォームを表示
 */
userRouter.get(
  "/:userId/edit",
  ensureAuthUser,
  ensureCorrectUser,
  async (req, res) => {
    const {userId} = req.params;
    const user = await User.find(Number(userId));
    res.render("users/edit", {
      user,
      errors: [],
    });
  },
);

const storage = multer.diskStorage({
  destination: join("public", "image", "users"),
  filename: (req, file, cb) => {
    const outFileName = `${nanoid()}.${file.mimetype.split("/")[1]}`;
    cb(null, outFileName);
  },
});
// アップロードファイルのフィルタリング設定
// PNG, JPEG 形式のみを受け入れ
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // 受け入れ可能な画像フォーマット
    const ACCEPTABLE_SUBTYPES = ["png", "jpeg"] as const;
    type AcceptableSubtype = (typeof ACCEPTABLE_SUBTYPES)[number];
    // MIMEタイプを検証して受け入れ可能な画像タイプに変換
    const toAcceptableImageMediaType = (
      fullMimeType: string,
    ): ["image", AcceptableSubtype] | null => {
      const isAcceptableSubtype = (
        subtype: string,
      ): subtype is AcceptableSubtype => {
        return (ACCEPTABLE_SUBTYPES as readonly string[]).includes(subtype);
      };
      const [mediaType, mediaSubtype] = fullMimeType.split("/");
      if (!mediaType || !mediaSubtype) return null;
      if (mediaType !== "image") return null;
      if (!isAcceptableSubtype(mediaSubtype)) return null;
      return ["image", mediaSubtype];
    };
    const mediaType = toAcceptableImageMediaType(file.mimetype);
    if (mediaType === null)
      return cb(
        new Error("Only image files in png or jpeg format can be uploaded"),
      );
    cb(null, true);
  },
});

/**
 * アップロードエラーハンドリング
 * multerでエラーが発生した場合、req.uploadErrorに格納する
 * バリデーション結果と共に処理される
 */
const uploadHandler: RequestHandler = (req, res, next) => {
  const name = "image";
  upload.single(name)(req, res, err => {
    if (err instanceof Error) {
      req.uploadError = {
        type: "field",
        path: name,
        msg: err.message,
        location: "body",
        value: req.file,
      };
    }
    next();
  });
};

/**
 * PATCH /users/:userId
 * ログイン済みユーザーのみアクセス可能
 * 本人のみ編集可能（ensureCorrectUser ミドルウェア）
 * ユーザー情報（名前・メール）の更新とプロフィール画像アップロード
 * name, email のバリデーション実施
 */
userRouter.patch(
  "/:userId",
  ensureAuthUser,
  ensureCorrectUser,
  uploadHandler,
  body("name", "Name can't be blank").notEmpty(),
  body("email", "Email can't be blank").notEmpty(),
  async (req, res, next) => {
    const {userId} = req.params;
    const {name, email} = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty() || req.uploadError) {
      const validationErrors = errors.array();
      if (req.uploadError) {
        validationErrors.push(req.uploadError);
      }
      return res.render("users/edit", {
        user: {
          id: userId,
          name,
          email,
        },
        errors: validationErrors,
      });
    }

    const user = await User.find(Number(userId));
    if (!user) return next(new Error("Invalid error: The user is undefined."));
    // ユーザー情報を更新
    Object.assign(user, {name, email});
    // ファイルがアップロードされた場合、画像パスを設定
    if (req.file) {
      user.imageName = req.file.path.replace("public", "");
    } else {
      console.log("no file");
    }

    // 更新内容をデータベースに保存してリダイレクト
    await user.update();
    req.dialogMessage?.setMessage("Your account has been updated successfully");
    res.redirect(`/users/${user.id}`);
  },
);
