import "jest-puppeteer";
import "expect-puppeteer";

describe("App component", () => {
  beforeAll(async () => {
    await Promise.all([
      page.waitForSelector("h1"),
      page.goto(`${TARGET_PAGE_URL}/component/index.html`),
    ]);
  });
  test("display components", async () => {
    expect(await hasSelector("h1")).toBe(true);
    expect(await hasSelector("img")).toBe(true);
    expect(await hasSelector("ul")).toBe(true);
    expect(await hasSelector("footer")).toBe(true);
  });
});

async function hasSelector(selector: string) {
  return await page.evaluate(sel => {
    return document.querySelector(sel) !== null;
  }, selector);
}
