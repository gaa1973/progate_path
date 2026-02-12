import "jest-puppeteer";
import "expect-puppeteer";

const port = process.env.PORT ?? 4446;
const TARGET_PAGE_URL = `http://localhost:${port}`;

describe("Blog list page", () => {
  beforeAll(async () => {
    await page.goto(TARGET_PAGE_URL);
  });
  test("display header title", async () => {
    const headerTitle = await page.$eval(
      "[data-test=header-title]",
      (el) => (el as HTMLHeadingElement).innerText.trim()
    );
    expect(headerTitle).toBe("Ken's Learning Blog");
  });
  test("apply css of #2B546A color to header title", async () => {
    const headerTitleStyle = await page.$eval(
      "[data-test=header-title]",
      (el) => window.getComputedStyle(el).getPropertyValue("color")
    );
    expect(headerTitleStyle).toBe("rgb(255, 255, 255)");
  });
  test("display blog titles", async () => {
    const [first, second, third, forth] = await page.$$eval(
      "[data-test=blog-title]",
      (els) => els.map((el) => (el as HTMLHeadingElement).innerText.trim())
    );
    expect(first).toBe("Why Is It Called a Bug?");
    expect(second).toBe("Do You Know the Origins of Cookies?");
    expect(third).toBe("Mouse That Connects to a Computer");
    expect(forth).toBe('What Is the "My" in "MySQL"?');
  });
  test("apply css of #2B546A color to blog title", async () => {
    const [first, second, third, forth] = await page.$$eval(
      "[data-test=blog-title]",
      (els) =>
        els.map((el) => window.getComputedStyle(el).getPropertyValue("color"))
    );
    expect(first).toBe("rgb(43, 84, 106)");
    expect(second).toBe("rgb(43, 84, 106)");
    expect(third).toBe("rgb(43, 84, 106)");
    expect(forth).toBe("rgb(43, 84, 106)");
  });
  test("display header icon-image", async () => {
    const imageUrl = await page.$eval(
      "[data-test=header-icon-image]",
      (el) => window.getComputedStyle(el).getPropertyValue('background-image')
    );
    expect(imageUrl).toBe(`url("${TARGET_PAGE_URL}/images/ninja.svg")`)
  });
});
