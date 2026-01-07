import "jest-puppeteer";
import "expect-puppeteer";

describe("Suspense fallback handling", () => {
  beforeAll(async () => {
    await page.setRequestInterception(true);
    page.on("request", interceptedRequest => {
      if (interceptedRequest.url().endsWith("/api/users")) {
        const url = interceptedRequest
          .url()
          .replace("/api/users", "/api/users-delay");
        interceptedRequest.continue({url: url});
      } else {
        interceptedRequest.continue();
      }
    });

    await Promise.all([
      page.goto(`${FRONT_URL}/`),
      page.waitForSelector("#root"),
    ]);
  });

  test("Suspense fallback displays then user list appears", async () => {
    // Wait for the "Loading..." text to be visible within the element with data-test="suspense"
    await page.waitForFunction(
      () =>
        document
          .querySelector('[data-test="suspense"]')
          ?.textContent?.includes("Loading..."),
      {timeout: 5000},
    );
    // Verify that the "Loading..." text is present within the element with data-test="suspense"
    expect(
      await page.evaluate(
        () => document.querySelector('[data-test="suspense"]')?.textContent,
      ),
    ).toContain("Loading...");

    // Wait for the user list to be visible
    await page.waitForSelector("#users");
    // Verify that the user list is visible
    expect(await page.evaluate(() => document.body.innerHTML)).toContain(
      "<h2>User List</h2>",
    );
  });
});
