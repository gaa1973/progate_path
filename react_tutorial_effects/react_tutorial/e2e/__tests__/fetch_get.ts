import "jest-puppeteer";
import "expect-puppeteer";

describe("App component", () => {
  beforeEach(async () => {
    await Promise.all([
      page.waitForSelector("#root"),
      page.goto(`${TARGET_PAGE_URL}/fetch_get/index.html`),
    ]);
  });
  test("display user", async () => {
    await page.waitForSelector("[data-test=user]");
    const name = await page.$eval("[data-test=user] > div:first-child", el => {
      return el.textContent;
    });
    const email = await page.$eval("[data-test=user] > div:last-child", el => {
      return el.textContent;
    });
    expect(name).toBe("name: Leanne Graham");
    expect(email).toBe("email: Sincere@april.biz");
  });
});
