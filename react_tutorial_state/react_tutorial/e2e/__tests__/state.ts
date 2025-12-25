import "jest-puppeteer";
import "expect-puppeteer";

describe("App component", () => {
  beforeAll(async () => {
    await Promise.all([
      page.waitForSelector("#root"),
      page.goto(`${TARGET_PAGE_URL}/state/index.html`),
    ]);
  });
  test("calculate values", async () => {
    const inputElementCount = await page.$$eval("input", inputs => {
      return inputs.length;
    });
    expect(inputElementCount).toBe(2);

    await page.type("input:first-of-type", "10");
    await page.type("input:last-of-type", "2");

    const results = await page.$$eval("#root div", results => {
      return results.map(result => result.textContent);
    });
    expect(results.length).toBe(4);
    expect(results[0]).toBe("x + y = 12");
    expect(results[1]).toBe("x - y = 8");
    expect(results[2]).toBe("x * y = 20");
    expect(results[3]).toBe("x / y = 5");
  });
});
