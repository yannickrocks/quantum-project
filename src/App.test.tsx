import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the homepage heading', () => {
  render(<App />)
  expect(screen.getByText('Welcome, Astronaut')).toBeInTheDocument()
})

test('redirects an unknown path to the homepage', () => {
  window.history.pushState({}, '', '/no-such-page')
  render(<App />)
  expect(screen.getByText('Welcome, Astronaut')).toBeInTheDocument()
  expect(window.location.pathname).toBe('/')
})
