import { test, expect, type Page } from '@playwright/test'
import { blockYoutube, correctWarps, setWarps } from './game'

type StyleSample = {
  opacity: number
  transform: string
  backgroundImage: string
}

type SamplingWindow = Window & {
  styleSamples?: Array<Array<StyleSample>>
  isSamplingDone?: boolean
}

const recordStyles = async (
  page: Page,
  selectors: Array<string>,
  trigger: () => Promise<unknown>,
  durationMs: number,
) => {
  await page.evaluate(
    ({ selectors, durationMs }) => {
      const sampling = window as SamplingWindow
      sampling.styleSamples = selectors.map(() => [])
      sampling.isSamplingDone = false
      const start = performance.now()
      const tick = () => {
        selectors.forEach((selector, index) => {
          const element = document.querySelector(selector)
          if (element) {
            const style = getComputedStyle(element)
            sampling.styleSamples![index].push({
              opacity: Number(style.opacity),
              transform: style.transform,
              backgroundImage: style.backgroundImage,
            })
          }
        })
        if (performance.now() - start < durationMs) {
          requestAnimationFrame(tick)
        } else {
          sampling.isSamplingDone = true
        }
      }
      tick()
    },
    { selectors, durationMs },
  )
  await trigger()
  await page.waitForFunction(() => (window as SamplingWindow).isSamplingDone, {
    timeout: durationMs + 5000,
  })
  return page.evaluate(() => (window as SamplingWindow).styleSamples!)
}

const isMoved = (transform: string) =>
  transform !== 'none' && transform !== 'matrix(1, 0, 0, 1, 0, 0)'

const waitForPageShown = (page: Page, heading: string) =>
  page.getByRole('heading', { name: heading }).evaluate(
    (element) =>
      new Promise<number>((resolve, reject) => {
        let wrapper = element as HTMLElement | null
        while (wrapper && !wrapper.style.opacity) {
          wrapper = wrapper.parentElement
        }
        if (!wrapper) {
          reject(new Error('No fade-in wrapper above the heading'))
          return
        }
        const tick = () => {
          if (Number(getComputedStyle(wrapper).opacity) === 1) {
            resolve(performance.now())
          } else {
            requestAnimationFrame(tick)
          }
        }
        tick()
      }),
  )

const launch = (page: Page) => page.getByRole('button', { name: 'Launch' })
const warp = (page: Page, number: number) =>
  page.getByRole('button', { name: `Warp ${number}` })

test.beforeEach(async ({ page }) => {
  await blockYoutube(page)
})

for (const { route, heading } of [
  { route: '/22minutes', heading: '22 Minutes' },
  { route: '/wanderingmoon', heading: 'The Wandering Moon' },
  { route: '/finalvoyage', heading: 'The Final Voyage' },
]) {
  test(`puzzle page is fully shown within 1.8s of loading: ${route}`, async ({
    page,
  }) => {
    await page.goto(route)
    expect(await waitForPageShown(page, heading)).toBeLessThan(1800)
  })
}

test('the quantum moon flickers in when it jumps to a planet', async ({
  page,
}) => {
  await page.goto('/wanderingmoon')
  await waitForPageShown(page, 'The Wandering Moon')

  const [samples] = await recordStyles(
    page,
    ['img[alt="QuantumMoon"]'],
    () => page.getByRole('button', { name: 'Twins', exact: true }).click(),
    1000,
  )
  const opacities = samples.map((sample) => sample.opacity)
  const firstPeak = opacities.findIndex((opacity) => opacity > 0.9)
  expect(firstPeak).toBeGreaterThanOrEqual(0)
  expect(Math.min(...opacities.slice(firstPeak))).toBeLessThan(0.9)
  expect(opacities.at(-1)).toBe(1)
})

test('warp symbols crossfade in place when they change', async ({ page }) => {
  await page.goto('/finalvoyage')
  await waitForPageShown(page, 'The Final Voyage')
  const symbols = page.locator('img[alt="Warp 1"]')
  await warp(page, 1).dispatchEvent('click')
  await expect(symbols).toHaveCount(1)

  const boxesDuringCrossfade = await page.evaluate(
    () =>
      new Promise<Array<string>>((resolve) => {
        ;(
          document.querySelector('button[aria-label="Warp 1"]') as HTMLElement
        ).click()
        const start = performance.now()
        const tick = () => {
          const images = document.querySelectorAll('img[alt="Warp 1"]')
          if (images.length === 2) {
            resolve(
              [...images].map((image) => {
                const box = image.getBoundingClientRect()
                return JSON.stringify([box.left, box.top, box.width])
              }),
            )
          } else if (performance.now() - start < 1000) {
            requestAnimationFrame(tick)
          } else {
            resolve([])
          }
        }
        tick()
      }),
  )
  expect(boxesDuringCrossfade).toHaveLength(2)
  expect(boxesDuringCrossfade[1]).toBe(boxesDuringCrossfade[0])
  await expect(symbols).toHaveCount(1)
})

test('launching with an empty warp slot shakes only the empty slots', async ({
  page,
}) => {
  await page.goto('/finalvoyage')
  await waitForPageShown(page, 'The Final Voyage')
  await setWarps(page, [1, 0, 0])

  const [emptySlot, filledSlot] = await recordStyles(
    page,
    ['button[aria-label="Warp 2"]', 'button[aria-label="Warp 1"]'],
    () => launch(page).click(),
    1000,
  )
  expect(emptySlot.some((sample) => isMoved(sample.transform))).toBe(true)
  expect(filledSlot.some((sample) => isMoved(sample.transform))).toBe(false)
  await expect(page).toHaveURL('/finalvoyage')
})

test('with reduced motion, empty warp slots dim instead of shaking, also from the keyboard', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/finalvoyage')
  await waitForPageShown(page, 'The Final Voyage')

  const [emptySlot] = await recordStyles(
    page,
    ['button[aria-label="Warp 1"]'],
    () => launch(page).press('Enter'),
    1000,
  )
  expect(emptySlot.some((sample) => isMoved(sample.transform))).toBe(false)
  const opacities = emptySlot.map((sample) => sample.opacity)
  expect(opacities[0]).toBeGreaterThanOrEqual(0.95)
  expect(Math.min(...opacities)).toBeLessThan(0.95)
  expect(opacities.at(-1)).toBe(1)
})

test('launch fades into a white-to-purple warp flash before the ending', async ({
  page,
}) => {
  await page.goto('/finalvoyage')
  await waitForPageShown(page, 'The Final Voyage')
  await setWarps(page, correctWarps)
  const [flashSamples] = await recordStyles(
    page,
    ['[data-testid="warp-flash"]'],
    () => launch(page).click(),
    5500,
  )
  expect(flashSamples.length).toBeGreaterThan(0)
  expect(flashSamples[0].backgroundImage).toMatch(
    /radial-gradient\(.*rgb\(255, 255, 255\)/,
  )
  expect(
    Math.max(...flashSamples.map((sample) => sample.opacity)),
  ).toBeGreaterThan(0.9)
  await expect(page).toHaveURL('/consciousobserver', { timeout: 3000 })
})

test('with reduced motion, launch fades to black instead of a bright flash', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/finalvoyage')
  await waitForPageShown(page, 'The Final Voyage')
  await setWarps(page, correctWarps)
  await launch(page).click()

  const style = await page.getByTestId('warp-flash').evaluate((element) => {
    const computed = getComputedStyle(element)
    return {
      image: computed.backgroundImage,
      color: computed.backgroundColor,
    }
  })
  expect(style).toEqual({ image: 'none', color: 'rgb(0, 0, 0)' })
})
