import type { Page } from '@playwright/test'

const planetCodes = {
  Sun: '2200',
  Twins: '1905',
  TimberHearth: '1128',
  BrittleHollow: '0431',
  GiantsDeep: '0626',
  DarkBramble: '1308',
}

export const wanderingMoonPlanets = [
  'Eye',
  'Twins',
  'TimberHearth',
  'BrittleHollow',
  'GiantsDeep',
  'DarkBramble',
]

export const correctOrderOfClicking = [
  4, 2, 1, 4, 3, 1, 5, 2, 4, 1, 3, 4, 2, 5, 3, 4, 2, 1, 4, 3, 5, 0,
]

export const correctWarps = [20, 26, 13]

export const blockYoutube = (page: Page) =>
  page.route('**/*youtube*/**', (route) => route.abort())

export const forceVariant2b = (page: Page) =>
  page.addInitScript(() => {
    Math.random = () => 0.1
  })

export const solvePuzzle1 = async (page: Page) => {
  for (const [id, code] of Object.entries(planetCodes)) {
    await page.locator(`#${id}`).fill(code)
  }
}

export const clickPlanets = async (page: Page, order: number[]) => {
  for (const index of order) {
    await page
      .locator('ul')
      .getByAltText(wanderingMoonPlanets[index], { exact: true })
      .click()
  }
}

export const solveWanderingMoon = (page: Page) =>
  clickPlanets(page, correctOrderOfClicking)

export const setWarps = async (page: Page, counts: number[]) => {
  for (const [coreIndex, count] of counts.entries()) {
    const warp = page.getByRole('button', { name: `Warp ${coreIndex + 1}` })
    for (let click = 0; click < count; click++) {
      await warp.dispatchEvent('click')
    }
  }
}

export const launch = (page: Page) => page.getByAltText('Launch 1').click()
