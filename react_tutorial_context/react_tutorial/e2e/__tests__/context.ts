import "jest-puppeteer";
import "expect-puppeteer";

describe("App component", () => {
  beforeAll(async () => {
    await Promise.all([
      page.waitForSelector("#root"),
      page.goto(`${TARGET_PAGE_URL}/context/index.html`),
    ]);
  });
  test("should switch to dark mode when the button clicked", async () => {
    // initial class name should be dark mode
    expect(await hasClass("#profile-card", "card-dark")).toBe(true);
    expect(await hasClass("#avatar", "avatar-dark")).toBe(true);
    expect(await hasClass("#body", "body-dark")).toBe(true);
    expect(await hasClass("#button", "button-dark")).toBe(true);
    expect(await hasSelector("#button")).toBe("Light Mode");

    // click the button
    await page.click("button");

    // should be dark mode
    expect(await hasClass("#profile-card", "card-light")).toBe(true);
    expect(await hasClass("#avatar", "avatar-light")).toBe(true);
    expect(await hasClass("#body", "body-light")).toBe(true);
    expect(await hasClass("#button", "button-light")).toBe(true);
    expect(await hasSelector("#button")).toBe("Dark Mode");
  });
});

async function hasSelector(selector: string) {
  return await page.evaluate(sel => {
    return document.querySelector(sel)?.textContent;
  }, selector);
}
async function hasClass(selector: string, className: string) {
  return await page.evaluate(
    (sel, className) => {
      return document.querySelector(sel)?.classList.contains(className);
    },
    selector,
    className,
  );
}
