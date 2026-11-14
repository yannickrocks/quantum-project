import { render, screen, waitFor } from '@testing-library/react'
import type FadeInComponent from '.'

const { default: FadeIn } = await vi.importActual<{
  default: typeof FadeInComponent
}>('.')

describe('FadeIn', () => {
  it('hides children from the accessibility tree until the delay passes', async () => {
    render(
      <FadeIn delay={300} transitionDuration={50}>
        <a href="/next">Next</a>
      </FadeIn>,
    )
    expect(screen.queryByRole('link', { name: 'Next' })).toBeNull()
    expect(await screen.findByRole('link', { name: 'Next' })).toBeVisible()
  })
})
