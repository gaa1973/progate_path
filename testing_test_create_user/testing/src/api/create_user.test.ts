// createUser関数をインポート
import {createUser} from "@/api/create_user";

// データベースをリセットする関数をインポート
import {resetDB} from "@/api/db/reset_db";
// データベースマネージャーをインポート
import {databaseManager} from "@/api/db";

// createUserのテストスイートを定義
describe("createUser", () => {
  // 各テストの前に実行される処理
  beforeEach(async () => {
    // データベースインスタンスを取得
    const db = await databaseManager.getInstance();
    // テスト前にデータベースをリセット
    await resetDB(db);
  });

  // ユーザー作成成功時のテスト
  it("should create a user", async () => {
    // テスト用のユーザーデータを定義
    const userData = {
      name: "testuser",
      email: "testuser@example.com",
    };
    // createUser関数を呼び出してユーザーを作成
    const user = await createUser(userData.name, userData.email);
    // ユーザーが正しく作成されたかをチェック
    expect(user).toBeDefined();
    // ユーザーがnullでないかをチェック
    expect(user).not.toBeNull();
    // ユーザーがnullでない場合の検証
    if (user !== null) {
      // 作成されたユーザーの名前が正しいかをチェック
      expect(user.name).toBe(userData.name);
      // 作成されたユーザーのメールアドレスが正しいかをチェック
      expect(user.email).toBe(userData.email);
    }
  });

  // 名前が空の場合のテスト
  it("should return null when name is empty", async () => {
    // 名前が空でcreateUser関数を呼び出し
    const user = await createUser("", "test@example.com");
    // nullが返されることをチェック
    expect(user).toBeNull();
  });

  // メールアドレスが空の場合のテスト
  it("should return null when email is empty", async () => {
    // メールアドレスが空でcreateUser関数を呼び出し
    const user = await createUser("testuser", "");
    // nullが返されることをチェック
    expect(user).toBeNull();
  });
});
