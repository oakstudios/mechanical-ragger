import { test, expect, Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto(
    "http://localhost:6006/iframe.html?id=web-component--slotted-element-styles"
  );
});

test.describe("Web Component", () => {
  test("should allow slotted elements to be targetted by page CSS", async ({
    page,
  }) => {
    const element = await page.locator("mechanical-ragger a");
    await expect(element).toHaveCSS("border-bottom-color", "rgb(255, 0, 0)");
  });
  test("should propagate content updates to the shadow dom", async ({
    page,
  }) => {
    const ragger = await page.waitForSelector("mechanical-ragger p");
    await ragger.evaluate((el) => {
      el.innerHTML = "two";
    });
    const element = await page.locator("mechanical-ragger >>> p");
    await expect(element).toHaveText("two");
  });
});
