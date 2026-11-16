import { test, expect } from '@playwright/test'
import { blockYoutube, forceVariant2b, wanderingMoonPlanets } from './game'
import {
  CorrectWarpList,
  correctOrderOfClicking,
} from '../src/utils/PuzzleAnswers'

test.beforeEach(async ({ page }) => {
  await blockYoutube(page)
})

test('planet codes are labelled inputs with a number keypad and a focus ring', async ({
  page,
}) => {
  await page.goto('/22minutes')
  const input = page.getByLabel('TimberHearth code')
  await expect(input).toHaveAttribute('inputmode', 'numeric')

  await expect(input).toBeVisible()
  await input.focus()
  const outline = await input.evaluate((element) => {
    const style = getComputedStyle(element)
    return { style: style.outlineStyle, width: parseFloat(style.outlineWidth) }
  })
  expect(outline.style).not.toBe('none')
  expect(outline.width).toBeGreaterThanOrEqual(2)
})

test('buttons use the site font', async ({ page }) => {
  await page.goto('/22minutes')
  const font = await page
    .getByRole('button', { name: 'Reset' })
    .evaluate((element) => getComputedStyle(element).fontFamily)
  expect(font).toContain('AndroclesOpti')
})

test('the wandering moon can be solved with the keyboard', async ({ page }) => {
  await forceVariant2b(page)
  await page.goto('/thewanderingmoon')

  const firstPlanet = page.getByRole('button', {
    name: wanderingMoonPlanets[0],
    exact: true,
  })
  await expect(firstPlanet).toBeVisible()
  await firstPlanet.focus()
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('button', { name: wanderingMoonPlanets[1], exact: true }),
  ).toBeFocused()

  for (const index of correctOrderOfClicking) {
    await page
      .getByRole('button', { name: wanderingMoonPlanets[index], exact: true })
      .press('Enter')
  }
  await page.getByRole('button', { name: 'Check' }).press('Enter')
  await expect(page.getByRole('link', { name: 'Proceed' })).toBeVisible()
})

test('the final voyage can be launched with the keyboard', async ({ page }) => {
  await page.goto('/finalvoyage')

  const firstWarp = page.getByRole('button', { name: 'Warp 1' })
  await expect(firstWarp).toBeVisible()
  await firstWarp.focus()
  await page.keyboard.press('Tab')
  await expect(page.getByRole('button', { name: 'Warp 2' })).toBeFocused()

  for (const [index, count] of CorrectWarpList.entries()) {
    const warp = page.getByRole('button', { name: `Warp ${index + 1}` })
    for (let press = 0; press < count; press++) await warp.press('Enter')
  }
  await page.getByRole('button', { name: 'Launch' }).press('Space')
  await expect(page).toHaveURL('/consciousobserver', { timeout: 8000 })
})
