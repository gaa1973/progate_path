import "jest-puppeteer";
import "expect-puppeteer";

describe("Add a product page", () => {
  test("top page to product list page", async () => {
    await Promise.all([
      page.goto(FRONT_URL),
      page.waitForSelector("a[href='/numbers']"),
      page.waitForSelector("a[href='/products']"),
    ]);
    await Promise.all([
      page.click("a[href='/products']"),
      page.waitForSelector("a[href='/']"),
      page.waitForSelector("a[href='/numbers']"),
    ]);

    expect(await page.content()).toContain("PRODUCTS");
  });
});
