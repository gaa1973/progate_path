import "jest-puppeteer";
import "expect-puppeteer";

describe("App component", () => {
  beforeEach(async () => {
    await Promise.all([
      page.waitForSelector("#root"),
      page.goto(`${TARGET_PAGE_URL}/state_with_array/index.html`),
    ]);
  });
  test("add user", async () => {
    await page.type("#root input", "shiro");
    await page.click("#root button");

    const users = await page.$eval("#root div:last-child", el => {
      return el.textContent;
    });

    expect(users).toBe("taro / jiro / saburo / shiro");
  });
  test("update user", async () => {
    await page.type("ul li:last-child input", "_updated");

    const users = await page.$eval("#root div:last-child", el => {
      return el.textContent;
    });

    expect(users).toBe("taro / jiro / saburo_updated");
  });
  test("remove user", async () => {
    await page.click("ul li:last-child button");

    const users = await page.$eval("#root div:last-child", el => {
      return el.textContent;
    });

    expect(users).toBe("taro / jiro");
  });
});
