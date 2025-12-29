import "jest-puppeteer";
import "expect-puppeteer";

describe("Route parameter", () => {
  test("number details page", async () => {
    await Promise.all([
      page.goto(`${FRONT_URL}/numbers`),
      page.waitForSelector("a[href='/']"),
    ]);
    await Promise.all([
      page.click("a[href='/numbers/1']"),
      page.waitForSelector("a[href='/numbers']"),
    ]);
    expect(await page.content()).toContain(
      "1 is pronounced 'ichi' in Japanese.",
    );
  });
});
