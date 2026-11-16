import { test, expect, type Locator } from '@playwright/test'
import { blockYoutube, solvePuzzle1, solveWanderingMoon } from './game'
import {
  WanderingMoonAlmostCorrect,
  WanderingMoonIncorrect,
} from '../src/utils/Constants'

const homepageBackground = 'rgb(255, 255, 255)'
const starfieldBackground = 'rgb(5, 5, 5)'
const largeTextRatio = 3
const normalTextRatio = 4.5

const luminance = (color: string) => {
  const [r, g, b] = color
    .match(/\d+(\.\d+)?/g)!
    .slice(0, 3)
    .map((channel) => {
      const value = Number(channel) / 255
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
    })
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

const contrast = (first: string, second: string) => {
  const [lighter, darker] = [luminance(first), luminance(second)].sort(
    (a, b) => b - a,
  )
  return (lighter + 0.05) / (darker + 0.05)
}

const expectContrast = async (
  locator: Locator,
  minimum: number,
  background?: string,
  pseudoElement?: string,
) => {
  const colors = await locator.evaluate(
    (element, pseudo) => ({
      text: getComputedStyle(element, pseudo).color,
      own: getComputedStyle(element).backgroundColor,
    }),
    pseudoElement ?? null,
  )
  if (!background) expect(colors.own).not.toBe('rgba(0, 0, 0, 0)')
  expect(
    contrast(colors.text, background ?? colors.own),
  ).toBeGreaterThanOrEqual(minimum)
}

test.beforeEach(async ({ page }) => {
  await blockYoutube(page)
})

test('homepage heading and disclaimer are readable on white', async ({
  page,
}) => {
  await page.goto('/')
  await expectContrast(
    page.getByRole('heading', { name: 'Welcome, Astronaut' }),
    largeTextRatio,
    homepageBackground,
  )
  for (const text of [/no copyright infringement/, /Mobius Digital/]) {
    await expectContrast(
      page.getByText(text),
      normalTextRatio,
      homepageBackground,
    )
  }
})

test('planet code placeholder is readable', async ({ page }) => {
  await page.goto('/22minutes')
  await expectContrast(
    page.getByLabel('TimberHearth code'),
    normalTextRatio,
    undefined,
    '::placeholder',
  )
})

test('wandering moon heading, messages and buttons are readable', async ({
  page,
}) => {
  await page.goto('/wanderingmoon')
  await expectContrast(
    page.getByRole('heading', { name: 'The Wandering Moon' }),
    largeTextRatio,
    starfieldBackground,
  )

  const check = page.getByRole('button', { name: 'Check' })
  await expectContrast(check, normalTextRatio)

  await check.click()
  await expectContrast(
    page.getByText(WanderingMoonIncorrect),
    normalTextRatio,
    starfieldBackground,
  )

  await page.getByRole('button', { name: 'Reset' }).click()
  await solveWanderingMoon(page)
  await check.click()
  await expectContrast(
    page.getByText(WanderingMoonAlmostCorrect),
    normalTextRatio,
    starfieldBackground,
  )
})

test('green proceed button text is readable', async ({ page }) => {
  await page.goto('/22minutes')
  await solvePuzzle1(page)
  await expectContrast(
    page.getByRole('link', { name: 'Proceed' }),
    normalTextRatio,
  )
})

test('credits titles are readable', async ({ page }) => {
  await page.goto('/consciousobserver')
  for (const name of ['Josh Lane-Trumper', 'Yannick Mermet']) {
    await expectContrast(
      page.getByRole('heading', { name, includeHidden: true }),
      largeTextRatio,
      starfieldBackground,
    )
  }
})
