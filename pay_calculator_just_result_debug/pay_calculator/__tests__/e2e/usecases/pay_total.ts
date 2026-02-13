import "jest-puppeteer";
import "expect-puppeteer";

describe("Pay total", () => {
  beforeEach(async () => {
    await page.goto(`${TARGET_PAGE_URL}/`);
    await Promise.all([
      page.waitForSelector("[data-test=coins]"),
      page.click("[data-test=pay-total-link]"),
    ]);
  });

  test("calc success", async () => {
    await page.type("[data-test=coins]", "334");
    await page.type("[data-test=people]", "3");
    await Promise.all([
      page.waitForSelector(".result"),
      page.click("[data-test=submit]"),
    ]);

    const pageTitle = await page.$eval("[data-test=page-title]", el =>
      (el as HTMLParagraphElement).innerText.trim(),
    );
    const resultCoin = await page.$eval("[data-test=result-coins]", el =>
      (el as HTMLSpanElement).innerText.trim(),
    );
    expect(pageTitle).toBe("PAY TOTAL");
    expect(resultCoin.trim()).toBe("1002");

    await Promise.all([
      page.waitForSelector("[data-test=coins]"),
      page.click("[data-test=back-link]"),
    ]);
  });

  test("calc input blank", async () => {
    await page.type("[data-test=coins]", "");
    await page.type("[data-test=people]", "");
    await Promise.all([
      page.waitForNavigation(),
      page.click("[data-test=submit]"),
    ]);

    const pageTitle = await page.$eval("[data-test=page-title]", el =>
      (el as HTMLParagraphElement).innerText.trim(),
    );
    const resultCoins = await page.$("[data-test=result-coins]");
    const coins = await page.$("[data-test=coins]");
    const people = await page.$("[data-test=people]");

    expect(pageTitle).toBe("PAY TOTAL");
    expect(resultCoins).toBeNull();
    expect(coins).not.toBeNull();
    expect(people).not.toBeNull();
  });
});
