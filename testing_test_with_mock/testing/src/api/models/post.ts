import {databaseManager} from "@/api/db";

export interface PostRawData {
  content: string;
}

export interface PostRawDataWithId extends PostRawData {
  id: number;
}

export class Post {
  public id?: number;

  static fromRawData(data: PostRawData): Post {
    return new Post(data.content);
  }

  static fromRawDataWithId(data: PostRawDataWithId): Post {
    const post = Post.fromRawData(data);
    post.id = data.id;
    return post;
  }

  constructor(public content: string) {}

  async save(): Promise<void> {
    const db = await databaseManager.getInstance();
    const {lastID} = await db.run(
      `INSERT INTO posts (content) VALUES ($content)`,
      {
        $content: this.content,
      },
    );
    this.id = lastID;
  }

  static async find(postId: number): Promise<Post | undefined> {
    const db = await databaseManager.getInstance();
    const postRawData = await db.get<PostRawDataWithId>(
      "SELECT p.id, p.content FROM posts u WHERE p.id=?",
      [postId],
    );
    return postRawData && Post.fromRawDataWithId(postRawData);
  }
}
