import { render } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import Homepage from './screens/homepage'
import Puzzle1 from './screens/puzzle1'
import NomaiWithText from './components/nomai-text'
import VideoPlayer from './components/videoplayer'

let errorSpy: ReturnType<typeof vi.spyOn>

beforeEach(() => {
  errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
  errorSpy.mockRestore()
})

const keyWarnings = () =>
  errorSpy.mock.calls.filter((call: unknown[]) =>
    String(call[0]).includes('unique "key"'),
  )

it('homepage renders without key warnings', () => {
  render(<Homepage />)
  expect(keyWarnings()).toHaveLength(0)
})

it('puzzle1 renders without key warnings', () => {
  render(<Puzzle1 />)
  expect(keyWarnings()).toHaveLength(0)
})

it('nomai images have descriptive alt text', () => {
  const { getAllByAltText } = render(<NomaiWithText />)
  expect(getAllByAltText('Purple Nomai')).toHaveLength(2)
  expect(getAllByAltText('Orange Nomai')).toHaveLength(1)
})

it('videoplayer allow attribute has no typos', () => {
  const { container } = render(
    <VideoPlayer width={1} height={1} url="x" title="x" />,
  )
  expect(container.querySelector('iframe')?.getAttribute('allow')).toContain(
    'accelerometer;',
  )
})
