import { test, expect } from '@playwright/test'
import {
  blockYoutube,
  clickPlanets,
  correctWarps,
  forceVariant2b,
  launch,
  setWarps,
  solvePuzzle1,
  solveWanderingMoon,
} from './game'

test.beforeEach(async ({ page }) => {
  await blockYoutube(page)
})

test('full playthrough', async ({ page }) => {
  await forceVariant2b(page)

  await page.goto('/')
  await page.getByRole('link', { name: 'Launch' }).click()

  await expect(page).toHaveURL('/22minutes')
  await solvePuzzle1(page)
  await page.getByRole('link', { name: 'Proceed' }).click()

  await expect(page).toHaveURL('/wakeup')
  await page.getByRole('link', { name: 'Wake up' }).click()

  await expect(page).toHaveURL('/wanderingmoon')
  await solveWanderingMoon(page)
  await page.getByRole('button', { name: 'Check' }).click()
  await page.getByRole('link', { name: 'Refresh' }).click()

  await expect(page).toHaveURL('/thewanderingmoon')
  await expect(page.getByAltText('Arms Stretch Out with Moon')).toBeVisible()
  await solveWanderingMoon(page)
  await page.getByRole('button', { name: 'Check' }).click()
  await page.getByRole('link', { name: 'Proceed' }).click()

  await expect(page).toHaveURL('/wakeupagain')
  await page.getByRole('link', { name: 'Wake up' }).click()

  await expect(page).toHaveURL('/finalvoyage')
  await setWarps(page, correctWarps)
  await launch(page)
  await expect(page).toHaveURL('/consciousobserver', { timeout: 8000 })
})

test('wrong warp -> terriblefate', async ({ page }) => {
  await page.goto('/finalvoyage')
  await setWarps(page, [1, 1, 1])
  await launch(page)
  await expect(page).toHaveURL('/terriblefate', { timeout: 8000 })
})

test('puzzle 2 not skippable', async ({ page }) => {
  await page.goto('/wanderingmoon')
  await clickPlanets(page, [4, 0, 0, 0])
  await page.getByRole('button', { name: 'Check' }).click()
  await expect(page.getByRole('link', { name: 'Refresh' })).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible()
})

test('timer expiry -> terriblefate', async ({ page, context, baseURL }) => {
  await context.addCookies([
    {
      name: 'CountDownCrumble',
      value: new Date(Date.now() + 2500).toISOString(),
      url: new URL('/finalvoyage', baseURL).href,
    },
  ])
  await page.goto('/finalvoyage')
  await expect(page).toHaveURL('/terriblefate', { timeout: 8000 })
})
