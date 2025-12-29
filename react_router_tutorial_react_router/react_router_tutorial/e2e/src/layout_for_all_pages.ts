import "jest-puppeteer";
import "expect-puppeteer";

describe("Layout for all pages", () => {
  test("top page", async () => {
    await Promise.all([
      page.goto(FRONT_URL),
      page.waitForSelector("a[data-test='header-logo']"),
    ]);

    const headerText = await page.$eval("a[data-test='header-logo']", el => {
      return (el as HTMLAnchorElement).innerText;
    });
    expect(headerText).toBe("REACT ROUTER TUTORIAL");
  });

  test("number list page", async () => {
    await Promise.all([
      page.goto(`${FRONT_URL}/numbers`),
      page.waitForSelector("a[data-test='header-logo']"),
    ]);

    const headerText = await page.$eval("a[data-test='header-logo']", el => {
      return (el as HTMLAnchorElement).innerText;
    });
    expect(headerText).toBe("REACT ROUTER TUTORIAL");
  });

  test("number details page", async () => {
    await Promise.all([
      page.goto(`${FRONT_URL}/numbers/1`),
      page.waitForSelector("a[data-test='header-logo']"),
    ]);

    const headerText = await page.$eval("a[data-test='header-logo']", el => {
      return (el as HTMLAnchorElement).innerText;
    });
    expect(headerText).toBe("REACT ROUTER TUTORIAL");
  });

  test("product list page", async () => {
    await Promise.all([
      page.goto(`${FRONT_URL}/products`),
      page.waitForSelector("a[data-test='header-logo']"),
    ]);

    const headerText = await page.$eval("a[data-test='header-logo']", el => {
      return (el as HTMLAnchorElement).innerText;
    });
    expect(headerText).toBe("REACT ROUTER TUTORIAL");
  });
});
