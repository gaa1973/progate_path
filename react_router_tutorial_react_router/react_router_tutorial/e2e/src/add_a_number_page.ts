import "jest-puppeteer";
import "expect-puppeteer";

describe("Add a number page", () => {
  test("top page to number list page", async () => {
    await Promise.all([
      page.goto(FRONT_URL),
      page.waitForSelector("a[href='/numbers']"),
      page.waitForSelector("a[href='/products']"),
    ]);
    await Promise.all([
      page.click("a[href='/numbers']"),
      page.waitForSelector("a[href='/']"),
      page.waitForSelector("a[href='/products']"),
    ]);

    expect(await page.content()).toContain("NUMBERS");
  });
});
