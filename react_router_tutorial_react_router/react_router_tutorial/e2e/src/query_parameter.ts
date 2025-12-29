import "jest-puppeteer";
import "expect-puppeteer";

describe("Query parameter", () => {
  test("product list page without parameter", async () => {
    await Promise.all([
      page.goto(`${FRONT_URL}/products`),
      page.waitForSelector("a[href='/']"),
    ]);

    const products = await page.$$eval(".item", elements =>
      elements.map(el => el.textContent),
    );
    expect(products.length).toBe(5);
  });

  test("product list page with parameter", async () => {
    await Promise.all([
      page.goto(`${FRONT_URL}/products?category=beverage`),
      page.waitForSelector("a[href='/']"),
    ]);

    const products = await page.$$eval(".item", elements =>
      elements.map(el => el.textContent),
    );
    expect(products.length).toBe(2);
  });
});
