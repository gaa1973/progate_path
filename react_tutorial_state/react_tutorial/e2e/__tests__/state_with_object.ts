import "jest-puppeteer";
import "expect-puppeteer";

describe("App component", () => {
  beforeAll(async () => {
    await Promise.all([
      page.waitForSelector("#root"),
      page.goto(`${TARGET_PAGE_URL}/state_with_object/index.html`),
    ]);
  });
  test("count up", async () => {
    const countBeforeClick = await page.$eval("span", inputs => {
      return inputs.textContent;
    });
    expect(countBeforeClick).toBe("0");

    await page.click("button");

    const countAfterClick = await page.$eval("span", inputs => {
      return inputs.textContent;
    });
    expect(countAfterClick).toBe("1");
  });
});
