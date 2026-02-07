import sqlite3 from "sqlite3";
import {open, Database} from "sqlite";
import path from "node:path";

export class DatabaseManager {
  private readonly filePath: string;
  private database?: Database<sqlite3.Database, sqlite3.Statement>;

  constructor(filePath: string) {
    this.filePath = filePath;
  }

  // Returns a sqlite#Database. See https://www.npmjs.com/package/sqlite for
  // more information.
  async getInstance(): Promise<Database<sqlite3.Database, sqlite3.Statement>> {
    if (!this.database) {
      this.database = await open({
        filename: this.filePath,
        driver: sqlite3.Database,
      });
    }
    return this.database;
  }
}

export const databaseManager = new DatabaseManager(
  path.join(path.resolve(), "src", "api", "db", `${process.env.NODE_ENV}.db`),
);
