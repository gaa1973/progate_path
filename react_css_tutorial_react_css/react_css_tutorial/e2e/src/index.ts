import "jest-puppeteer";
import "expect-puppeteer";

describe("Display Card component", () => {
  beforeEach(async () => {
    await Promise.all([page.goto(FRONT_URL), page.waitForSelector("#root")]);
  });

  test("App", async () => {
    const classList = await page.$eval("#root>div", elm =>
      Array.from(elm.classList),
    );
    expect(classList).toContain("container");
    expect(classList).toContain("mx-auto");
    expect(classList).toContain("flex");
    expect(classList).toContain("flex-wrap");
    expect(classList).toContain("justify-start");
  });

  test("Card", async () => {
    const classLists = await page.$$eval("#root>div>div", elms =>
      elms.map(elm => Array.from(elm.classList)),
    );
    expect(classLists[0]).toContain("flex");
    expect(classLists[0]).toContain("flex-row");
    expect(classLists[0]).toContain("rounded-lg");
    expect(classLists[0]).toContain("shadow-md");
    expect(classLists[0]).toContain("hover:shadow-lg");

    expect(classLists[2]).toContain("flex");
    expect(classLists[2]).toContain("flex-row");
    expect(classLists[2]).toContain("rounded-lg");
    expect(classLists[2]).toContain("shadow-md");
    expect(classLists[2]).toContain("hover:shadow-lg");
  });
});
