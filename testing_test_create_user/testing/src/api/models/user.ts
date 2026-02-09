import {databaseManager} from "@/api/db";

export interface UserRawData {
  name: string;
  email: string;
}

export interface UserRawDataWithId extends UserRawData {
  id: number;
}

export class User {
  public id?: number;

  static fromRawData(data: UserRawData): User {
    return new User(data.name, data.email);
  }

  static fromRawDataWithId(data: UserRawDataWithId): User {
    const user = User.fromRawData(data);
    user.id = data.id;
    return user;
  }

  constructor(
    public name: string,
    public email: string,
  ) {}

  async save(): Promise<void> {
    const db = await databaseManager.getInstance();
    const {lastID} = await db.run(
      `
        INSERT INTO users
          (name, email)
        VALUES ($name, $email)`,
      {
        $name: this.name,
        $email: this.email,
      },
    );
    this.id = lastID;
  }

  static async find(userId: number): Promise<User | undefined> {
    const db = await databaseManager.getInstance();
    const userRawData = await db.get<UserRawDataWithId>(
      "SELECT u.id, u.name, u.email FROM users u WHERE u.id=?",
      [userId],
    );
    return userRawData && User.fromRawDataWithId(userRawData);
  }
}
