import type { Page } from '@playwright/test'
import {
  correctOrderOfClicking,
  puzzle1Codes,
} from '../src/utils/PuzzleAnswers'

export const wanderingMoonPlanets = Object.keys(puzzle1Codes).filter(
  (planet) => planet !== 'Sun',
)

export const blockYoutube = (page: Page) =>
  page.route('**/*youtube*/**', (route) => route.abort())

export const forceVariant2b = (page: Page) =>
  page.addInitScript(() => {
    Math.random = () => 0.1
  })

export const solvePuzzle1 = async (page: Page) => {
  for (const [id, code] of Object.entries(puzzle1Codes).filter(
    ([id]) => id !== 'Eye',
  )) {
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
