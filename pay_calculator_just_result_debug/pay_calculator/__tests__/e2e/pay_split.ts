import "jest-puppeteer";
import "expect-puppeteer";

describe("Pay split page", () => {
  const TITLE = "PAY SPLIT";

  test("display a calculate split form", async () => {
    await Promise.all([
      page.waitForSelector("[data-test=pay-split-form]"),
      page.goto(`${TARGET_PAGE_URL}/pay-split`),
    ]);
    const pageTitle = await page.$eval("[data-test=page-title]", el =>
      (el as HTMLParagraphElement).innerText.trim(),
    );
    const formAction = await page.$eval(
      "[data-test=pay-split-form]",
      el => (el as HTMLFormElement).action,
    );
    const operator = await page.$eval("[data-test=operator]", el =>
      (el as HTMLSpanElement).innerText.trim(),
    );
    expect(pageTitle).toBe(TITLE);
    expect(formAction).toBe(`${TARGET_PAGE_URL}/pay-split`);
    expect(operator).toBe("➗");
  });
});
