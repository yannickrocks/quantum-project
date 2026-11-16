import { test, expect } from '@playwright/test'
import { blockYoutube, forceVariant2b } from './game'

const pages = [
  { route: '/', title: 'OW1128', heading: 'Welcome, Astronaut' },
  {
    route: '/22minutes',
    title: '22 Minutes · OW1128',
    heading: '22 Minutes',
    videoTitle: '22 Minutes video',
  },
  { route: '/wakeup', title: 'Wake Up · OW1128' },
  {
    route: '/wanderingmoon',
    title: 'The Wandering Moon · OW1128',
    heading: 'The Wandering Moon',
    videoTitle: 'The Wandering Moon video',
  },
  {
    route: '/thewanderingmoon',
    title: 'The Wandering Moon · OW1128',
    heading: 'The Wandering Moon',
    isMoonFound: true,
  },
  { route: '/wakeupagain', title: 'Wake Up · OW1128' },
  {
    route: '/finalvoyage',
    title: 'The Final Voyage · OW1128',
    heading: 'The Final Voyage',
    videoTitle: 'The Final Voyage video',
  },
  {
    route: '/consciousobserver',
    title: 'Conscious Observer · OW1128',
    videoTitle: 'Conscious Observer video',
  },
  {
    route: '/terriblefate',
    title: 'Terrible Fate · OW1128',
    videoTitle: 'Terrible Fate video',
  },
]

test.beforeEach(async ({ page }) => {
  await blockYoutube(page)
})

for (const { route, title, heading, isMoonFound } of pages) {
  test(`${route} has its own title, one main landmark and no decorative images announced`, async ({
    page,
  }) => {
    if (isMoonFound) await forceVariant2b(page)
    await page.goto(route)
    await expect(page).toHaveTitle(title)
    await expect(page.getByRole('main')).toHaveCount(1)
    await expect(page.getByRole('img', { name: 'Background' })).toHaveCount(0)
    await expect(page.getByRole('img', { name: 'BackWarp' })).toHaveCount(0)
    if (heading) {
      await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading)
    }
  })
}

for (const { route, videoTitle } of pages) {
  if (!videoTitle) continue
  test(`${route} names its video for screen readers`, async ({ page }) => {
    await page.goto(route)
    await expect(page.locator('iframe[src*="youtube"]')).toHaveAttribute(
      'title',
      videoTitle,
    )
  })
}

test('images have accurate names', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('img', { name: 'Outer Wilds' })).toBeVisible()
  await page.goto('/22minutes')
  await expect(page.getByRole('img', { name: 'Timber Hearth' })).toBeVisible()
})
