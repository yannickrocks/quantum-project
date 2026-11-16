import { fireEvent, render, screen } from '@testing-library/react'
import WanderingMoon from '.'
import { PlanetList, correctOrderOfClicking } from '../../utils/PlanetsList'
import {
  WanderingMoonAlmostCorrect,
  WanderingMoonCorrect,
  WanderingMoonIncorrect,
} from '../../utils/Constants'

const planetNames = PlanetList.filter((x) => x.planet !== 'Sun').map(
  (x) => x.planet,
)

const clickSequence = (sequence: Array<number>) => {
  sequence.forEach((index) => {
    fireEvent.click(screen.getByAltText(planetNames[index]))
  })
  fireEvent.click(screen.getByRole('button', { name: 'Check' }))
}

const wrongAfterFirstClick = [
  correctOrderOfClicking[0],
  ...correctOrderOfClicking.slice(1).map(() => 0),
]

describe('WanderingMoon before the moon is found', () => {
  it('shows only the incorrect message when only the first click matches', () => {
    render(<WanderingMoon />)
    clickSequence(wrongAfterFirstClick)
    expect(screen.queryByRole('link', { name: 'Refresh' })).toBeNull()
    expect(screen.queryByText(WanderingMoonAlmostCorrect)).toBeNull()
    expect(screen.getByText(WanderingMoonIncorrect)).toBeInTheDocument()
  })

  it('shows refresh link and no incorrect message for the correct sequence', () => {
    render(<WanderingMoon />)
    clickSequence(correctOrderOfClicking)
    expect(screen.getByRole('link', { name: 'Refresh' })).toBeInTheDocument()
    expect(screen.getByText(WanderingMoonAlmostCorrect)).toBeInTheDocument()
    expect(screen.queryByText(WanderingMoonIncorrect)).toBeNull()
  })
})

describe('WanderingMoon once the moon is found', () => {
  it('shows only the incorrect message when only the first click matches', () => {
    render(<WanderingMoon isMoonFound />)
    clickSequence(wrongAfterFirstClick)
    expect(screen.queryByRole('link', { name: 'Proceed' })).toBeNull()
    expect(screen.queryByText(WanderingMoonCorrect)).toBeNull()
    expect(screen.getByText(WanderingMoonIncorrect)).toBeInTheDocument()
  })

  it('shows proceed link and no incorrect message for the correct sequence', () => {
    render(<WanderingMoon isMoonFound />)
    clickSequence(correctOrderOfClicking)
    expect(screen.getByRole('link', { name: 'Proceed' })).toHaveAttribute(
      'href',
      '/wakeupagain',
    )
    expect(screen.getByText(WanderingMoonCorrect)).toBeInTheDocument()
    expect(screen.queryByText(WanderingMoonIncorrect)).toBeNull()
  })

  it('reloads the page when Refresh is pressed after solving', () => {
    const reload = vi.fn()
    vi.stubGlobal('location', { ...window.location, reload })
    render(<WanderingMoon isMoonFound />)
    clickSequence(correctOrderOfClicking)
    fireEvent.click(screen.getByRole('button', { name: 'Refresh' }))
    expect(reload).toHaveBeenCalledTimes(1)
    vi.unstubAllGlobals()
  })
})
