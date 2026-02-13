import "jest-puppeteer";
import "expect-puppeteer";

describe("Pay total page", () => {
  const TITLE = "PAY TOTAL";

  test("display a calculate total form", async () => {
    await Promise.all([
      page.waitForSelector("[data-test=pay-total-form]"),
      page.goto(`${TARGET_PAGE_URL}/pay-total`),
    ]);
    const pageTitle = await page.$eval("[data-test=page-title]", el =>
      (el as HTMLParagraphElement).innerText.trim(),
    );
    const formAction = await page.$eval(
      "[data-test=pay-total-form]",
      el => (el as HTMLFormElement).action,
    );
    const operator = await page.$eval("[data-test=operator]", el =>
      (el as HTMLSpanElement).innerText.trim(),
    );
    expect(pageTitle).toBe(TITLE);
    expect(formAction).toBe(`${TARGET_PAGE_URL}/pay-total`);
    expect(operator).toBe("✖️");
  });
});
