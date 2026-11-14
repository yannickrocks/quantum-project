import { render, screen, waitFor } from '@testing-library/react'
import type FadeInComponent from '.'

vi.stubGlobal(
  'matchMedia',
  (query: string) =>
    ({
      matches: query.startsWith('(prefers-reduced-motion'),
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
    }) as unknown as MediaQueryList,
)

const { default: FadeIn } = await vi.importActual<{
  default: typeof FadeInComponent
}>('.')

describe('FadeIn with reduced motion', () => {
  it('fades children in without sliding them', async () => {
    render(
      <FadeIn delay={10} transitionDuration={10000}>
        <p>Chert's notes</p>
      </FadeIn>,
    )
    const wrapper = screen.getByText("Chert's notes").parentElement!
    await waitFor(() => expect(wrapper.style.transform).toMatch(/^(none|)$/), {
      timeout: 300,
    })
  })
})
