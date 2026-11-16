import { test, expect } from '@playwright/test'
import { blockYoutube } from './game'

test.beforeEach(async ({ page }) => {
  await blockYoutube(page)
})

test('site fonts are woff2 with font-display swap', async ({ page }) => {
  await page.goto('/')
  const fontFaces = await page.evaluate(() =>
    [...document.styleSheets]
      .flatMap((sheet) => [...sheet.cssRules])
      .filter((rule) => rule instanceof CSSFontFaceRule)
      .map((rule) => ({
        family: rule.style.getPropertyValue('font-family'),
        display: rule.style.getPropertyValue('font-display'),
        src: rule.style.getPropertyValue('src'),
      })),
  )
  expect(fontFaces.map((fontFace) => fontFace.family).sort()).toEqual([
    'AndroclesOpti-Heavy',
    'AndroclesOpti-Regular',
  ])
  for (const fontFace of fontFaces) {
    expect(fontFace.display).toBe('swap')
    expect(fontFace.src).toMatch(/\.woff2"?\) format\("woff2"\)/)
  }
})

test('wake-up background downloads in under 250KB', async ({ page }) => {
  await page.goto('/wakeup')
  const size = await page.evaluate(async () => {
    const image = document.querySelector<HTMLImageElement>(
      'img[src*="backgroundZaps"]',
    )
    const response = await fetch(image?.currentSrc ?? '')
    return (await response.arrayBuffer()).byteLength
  })
  expect(size).toBeLessThan(250_000)
})
