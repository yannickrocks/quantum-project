import { fireEvent, render, screen } from '@testing-library/react'
import Puzzle2a from './puzzle2a'
import Puzzle2b from './puzzle2b'
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

describe('Puzzle2a', () => {
  it('shows only the incorrect message when only the first click matches', () => {
    render(<Puzzle2a />)
    clickSequence(wrongAfterFirstClick)
    expect(screen.queryByRole('link', { name: 'Refresh' })).toBeNull()
    expect(screen.queryByText(WanderingMoonAlmostCorrect)).toBeNull()
    expect(screen.getByText(WanderingMoonIncorrect)).toBeInTheDocument()
  })

  it('shows refresh link and no incorrect message for the correct sequence', () => {
    render(<Puzzle2a />)
    clickSequence(correctOrderOfClicking)
    expect(screen.getByRole('link', { name: 'Refresh' })).toBeInTheDocument()
    expect(screen.getByText(WanderingMoonAlmostCorrect)).toBeInTheDocument()
    expect(screen.queryByText(WanderingMoonIncorrect)).toBeNull()
  })
})

describe('Puzzle2b', () => {
  it('shows only the incorrect message when only the first click matches', () => {
    render(<Puzzle2b />)
    clickSequence(wrongAfterFirstClick)
    expect(screen.queryByRole('link', { name: 'Proceed' })).toBeNull()
    expect(screen.queryByText(WanderingMoonCorrect)).toBeNull()
    expect(screen.getByText(WanderingMoonIncorrect)).toBeInTheDocument()
  })

  it('shows proceed link and no incorrect message for the correct sequence', () => {
    render(<Puzzle2b />)
    clickSequence(correctOrderOfClicking)
    expect(screen.getByRole('link', { name: 'Proceed' })).toHaveAttribute(
      'href',
      '/wakeupagain',
    )
    expect(screen.getByText(WanderingMoonCorrect)).toBeInTheDocument()
    expect(screen.queryByText(WanderingMoonIncorrect)).toBeNull()
  })
})
