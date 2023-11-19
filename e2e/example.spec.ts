import { expect, test, Page } from "@playwright/test"

test("has title", async ({ page }: { page: Page }) => {
  await page.goto("./")

  await expect(page).toHaveTitle("")
})
