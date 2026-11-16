import { test, expect, type Page } from '@playwright/test'
import { blockYoutube } from './game'

const storyPages = [
  { route: '/22minutes', heading: '22 Minutes' },
  { route: '/wanderingmoon', heading: 'The Wandering Moon' },
  { route: '/finalvoyage', heading: 'The Final Voyage' },
]

const starfieldRoutes = [
  '/22minutes',
  '/wanderingmoon',
  '/finalvoyage',
  '/consciousobserver',
  '/terriblefate',
]

const background = (page: Page) => page.locator('img[src*="background"]')

const expectStarfieldLoaded = (page: Page) =>
  expect
    .poll(() =>
      background(page).evaluate(
        (image: HTMLImageElement) => image.naturalWidth,
      ),
    )
    .toBeGreaterThan(0)

test.beforeEach(async ({ page }) => {
  await blockYoutube(page)
})

for (const width of [1024, 1100, 1300, 2560]) {
  for (const { route, heading } of storyPages) {
    test(`story text stays above the video at ${width}px: ${route}`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.goto(route)
      const headingElement = page.getByRole('heading', { name: heading })
      await expect(headingElement).toBeVisible()

      const textBottom = await headingElement.evaluate((element) => {
        const range = document.createRange()
        range.selectNodeContents(element.parentElement!)
        return Math.max(
          ...[...range.getClientRects()]
            .filter((rect) => rect.width > 0)
            .map((rect) => rect.bottom),
        )
      })
      const videoTop = await page
        .locator('iframe[src*="youtube"]')
        .evaluate((element) => element.getBoundingClientRect().top)

      expect(textBottom).toBeLessThanOrEqual(videoTop)
    })
  }
}

for (const viewport of [
  { width: 3440, height: 1440 },
  { width: 1600, height: 1800 },
]) {
  for (const route of starfieldRoutes) {
    test(`starfield covers ${viewport.width}x${viewport.height}: ${route}`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport)
      await page.goto(route)
      await expectStarfieldLoaded(page)

      const box = await background(page).boundingBox()
      expect(box).not.toBeNull()
      expect(box!.x).toBeLessThanOrEqual(0)
      expect(box!.y).toBeLessThanOrEqual(0)
      expect(box!.x + box!.width).toBeGreaterThanOrEqual(viewport.width)
      expect(box!.y + box!.height).toBeGreaterThanOrEqual(viewport.height)
    })
  }
}

test('starfield keeps its natural size on a standard desktop', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/22minutes')
  await expectStarfieldLoaded(page)

  const starfield = background(page)
  const natural = await starfield.evaluate((image: HTMLImageElement) => ({
    width: image.naturalWidth,
    height: image.naturalHeight,
  }))
  expect(await starfield.boundingBox()).toMatchObject({
    x: 0,
    y: 0,
    ...natural,
  })
})

for (const route of ['/wakeup', '/wakeupagain']) {
  test(`wake-up background is cropped, not stretched, on a phone: ${route}`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto(route)

    const fit = await background(page).evaluate(
      (element) => getComputedStyle(element).objectFit,
    )
    expect(fit).toBe('cover')
  })
}
