import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Puzzle1 from '.'
import { PlanetList } from '../../utils/PlanetsList'

const planets = PlanetList.filter((x) => x.planet !== 'Eye')

const enterCodes = (codes: Array<string>) => {
  planets.forEach((planet, index) => {
    fireEvent.change(document.getElementById(planet.planet)!, {
      target: { value: codes[index] },
    })
  })
}

describe('Puzzle1', () => {
  it('shows Reset until every code is correct', () => {
    render(<Puzzle1 />)
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Proceed' })).toBeNull()
  })

  it('shows the Proceed link when all codes are correct', () => {
    render(<Puzzle1 />)
    enterCodes(planets.map((planet) => planet.puzzle1code))
    expect(screen.getByRole('link', { name: 'Proceed' })).toHaveAttribute(
      'href',
      '/wakeup',
    )
  })

  it('labels each planet code input and asks for a number keypad', () => {
    render(<Puzzle1 />)
    planets.forEach((planet) => {
      expect(screen.getByLabelText(`${planet.planet} code`)).toHaveAttribute(
        'inputmode',
        'numeric',
      )
    })
  })

  it('keeps Reset when one code is wrong', () => {
    render(<Puzzle1 />)
    const codes = planets.map((planet) => planet.puzzle1code)
    codes[0] = '9999'
    enterCodes(codes)
    expect(screen.queryByRole('link', { name: 'Proceed' })).toBeNull()
  })
})
