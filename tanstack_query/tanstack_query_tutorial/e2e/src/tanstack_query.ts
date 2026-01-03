import "jest-puppeteer";
import "expect-puppeteer";

describe("users page", () => {
  beforeAll(async () => {
    await Promise.all([
      page.goto(`${FRONT_URL}/`),
      page.waitForSelector("#root"),
    ]);
  });

  test("show user list", async () => {
    const usersElement = await page.waitForSelector("#users");
    expect(usersElement).not.toBeNull();
  });

  test("create a new user", async () => {
    // Input values
    await page.type("input[name='name']", "ninjawanko");
    await page.type("input[name='email']", "progate@example.com");

    // Submit the form
    const [name, email] = await Promise.all([
      page.$("input[name='name']"),
      page.$("input[name='email']"),
      page.click("button[type='submit']"),
    ]);

    // Wait for input fields to be cleared
    if (!name || !email) {
      throw new Error("Input elements not found");
    }
    await Promise.all([
      page.waitForFunction(name => name.value === "", {}, name),
      page.waitForFunction(email => email.value === "", {}, email),
    ]);

    // Wait for the new user to be added to the user list
    await page.waitForFunction(
      'Array.from(document.querySelectorAll("#users li")).some(li => li.textContent.includes("ninjawankoprogate@example.com"))',
    );

    // Verify that new user is added to the user list
    const userList = await page.$$eval("#users li", users =>
      users.map(user => user.textContent),
    );
    expect(userList).toContain("ninjawankoprogate@example.com");
  });
});
