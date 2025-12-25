import "jest-puppeteer";
import "expect-puppeteer";

describe("App component", () => {
  beforeEach(async () => {
    await Promise.all([
      page.waitForSelector("#root"),
      page.goto(`${TARGET_PAGE_URL}/fetch_post/index.html`),
    ]);
  });
  test("display the message after the form submitted", async () => {
    await page.type("form input", "hello world");
    await page.click("form button");
    await page.waitForSelector("#root div");
    const message = await page.$eval("#root div", el => {
      return el.textContent;
    });
    expect(message).toBe("Form submitted");
  });
});
