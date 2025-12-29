import "jest-puppeteer";
import "expect-puppeteer";

describe("Layout for specific pages", () => {
  test("top page", async () => {
    await Promise.all([page.goto(FRONT_URL), page.waitForSelector("a[data-test='header-logo']")]);
    const headerText = await page.$eval("a[data-test='header-logo']", el => {
      return (el as HTMLAnchorElement).innerText;
    });
    expect(headerText).toBe("REACT ROUTER TUTORIAL");

    const h2 = await page.$("h2");
    expect(h2).toBeNull();
  });

  test("number list page", async () => {
    await Promise.all([
      page.goto(`${FRONT_URL}/numbers`),
      page.waitForSelector("a[href='/']"),
    ]);

    const headerText = await page.$eval("a[data-test='header-logo']", el => {
      return (el as HTMLAnchorElement).innerText;
    });
    expect(headerText).toBe("REACT ROUTER TUTORIAL");

    const secondHeaderText = await page.$eval("h2", el => {
      return (el as HTMLDivElement).innerText;
    });
    expect(secondHeaderText).toBe("NUMBERS");
  });

  test("number details page", async () => {
    await Promise.all([
      page.goto(`${FRONT_URL}/numbers/1`),
      page.waitForSelector("a[href='/']"),
    ]);

    const headerText = await page.$eval("a[data-test='header-logo']", el => {
      return (el as HTMLAnchorElement).innerText;
    });
    expect(headerText).toBe("REACT ROUTER TUTORIAL");

    const secondHeaderText = await page.$eval("h2", el => {
      return (el as HTMLDivElement).innerText;
    });
    expect(secondHeaderText).toBe("NUMBERS");
  });

  test("product list page", async () => {
    await Promise.all([
      page.goto(`${FRONT_URL}/products`),
      page.waitForSelector("a[href='/']"),
    ]);

    const headerText = await page.$eval("a[data-test='header-logo']", el => {
      return (el as HTMLAnchorElement).innerText;
    });
    expect(headerText).toBe("REACT ROUTER TUTORIAL");

    const secondHeaderText = await page.$eval("h2", el => {
      return (el as HTMLDivElement).innerText;
    });
    expect(secondHeaderText).toBe("PRODUCTS");
  });
});
