import { test, expect } from '@playwright/test'
import { blockYoutube } from './game'

test.beforeEach(async ({ page }) => {
  await blockYoutube(page)
})

for (const { viewport, minimumWidth } of [
  { viewport: { width: 1440, height: 900 }, minimumWidth: 1050 },
  { viewport: { width: 1920, height: 1080 }, minimumWidth: 1350 },
  { viewport: { width: 1100, height: 1300 }, minimumWidth: 1000 },
  { viewport: { width: 390, height: 844 }, minimumWidth: 350 },
]) {
  test(`good ending video is large and fully on screen at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport)
    await page.goto('/consciousobserver')
    const video = page.locator('iframe[src*="youtube"]')
    await expect(video).toBeVisible()

    const box = (await video.boundingBox())!
    expect(box.width / box.height).toBeCloseTo(16 / 9, 1)
    expect(box.width).toBeGreaterThanOrEqual(minimumWidth)
    expect(box.x).toBeGreaterThanOrEqual(0)
    expect(box.x + box.width).toBeLessThanOrEqual(viewport.width)
    expect(box.y + box.height).toBeLessThanOrEqual(viewport.height)
  })
}

for (const viewport of [
  { width: 1024, height: 768 },
  { width: 1100, height: 1300 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
  { width: 2560, height: 1440 },
]) {
  test(`good ending credits for both creators fit below the video at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport)
    await page.goto('/consciousobserver')
    for (const name of ['Josh Lane-Trumper', 'Yannick Mermet']) {
      const credit = page.getByRole('heading', { name, includeHidden: true })
      const bottom = await credit.evaluate(
        (element) => element.parentElement!.getBoundingClientRect().bottom,
      )
      expect(bottom).toBeLessThanOrEqual(viewport.height)
    }
  })
}

test('good ending video asks to autoplay', async ({ page }) => {
  await page.goto('/consciousobserver')
  const video = page.locator('iframe[src*="youtube"]')
  await expect(video).toHaveAttribute('src', /autoplay=1/)
  await expect(video).toHaveAttribute('allow', /autoplay/)
})

for (const { viewport, minimumWidth } of [
  { viewport: { width: 1024, height: 768 }, minimumWidth: 800 },
  { viewport: { width: 1440, height: 900 }, minimumWidth: 1050 },
  { viewport: { width: 390, height: 844 }, minimumWidth: 350 },
]) {
  test(`bad ending video is large with its button on screen at ${viewport.width}x${viewport.height}`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport)
    await page.goto('/terriblefate')
    const video = page.locator('iframe[src*="youtube"]')
    await expect(video).toBeVisible()
    const box = (await video.boundingBox())!
    expect(box.width / box.height).toBeCloseTo(16 / 9, 1)
    expect(box.width).toBeGreaterThanOrEqual(minimumWidth)

    const button = await page
      .getByRole('link', { name: 'One more loop?', includeHidden: true })
      .boundingBox()
    expect(button!.y + button!.height).toBeLessThanOrEqual(viewport.height)
  })
}

test('bad ending button appears at its fallback time when the video cannot play', async ({
  page,
}) => {
  await page.clock.install()
  await page.goto('/terriblefate')
  const button = page.getByRole('link', { name: 'One more loop?' })
  await page.clock.runFor(60_000)
  await expect(button).toBeHidden()
  await page.clock.runFor(8_000)
  await expect(button).toBeVisible()
})

test('good ending credits appear at their fallback time when the video cannot play', async ({
  page,
}) => {
  await page.clock.install()
  await page.goto('/consciousobserver')
  const credit = page.getByRole('heading', { name: 'Yannick Mermet' })
  await page.clock.runFor(160_000)
  await expect(credit).toBeHidden()
  await page.clock.runFor(8_000)
  await expect(credit).toBeVisible()
})
