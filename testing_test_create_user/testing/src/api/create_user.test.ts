import {createUser} from "@/api/create_user";

import {resetDB} from "@/api/db/reset_db";
import {databaseManager} from "@/api/db";

describe("createUser", () => {
  beforeEach(async () => {
    const db = await databaseManager.getInstance();
    await resetDB(db);
  });
});
