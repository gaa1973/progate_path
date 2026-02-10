import {createUser} from "@/api/create_user";

import {resetDB} from "@/api/db/reset_db";
import {databaseManager} from "@/api/db";

describe("createUser", () => {
  beforeEach(async () => {
    const db = await databaseManager.getInstance();
    await resetDB(db);
  });

  it("should create a user", async () => {
    const db = await databaseManager.getInstance();
    const userData = {
      username: "testuser",
      email: "testuser@example.com",
    };
    const user = await createUser(userData.username, userData.email);
    expect(user).toBeDefined();
    expect(user.username).toBe(userData.username);
    expect(user.email).toBe(userData.email);
  });
});
