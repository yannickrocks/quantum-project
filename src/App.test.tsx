import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the homepage heading', async () => {
  render(<App />)
  expect(await screen.findByText('Welcome, Astronaut')).toBeInTheDocument()
})

test('redirects an unknown path to the homepage', async () => {
  window.history.pushState({}, '', '/no-such-page')
  render(<App />)
  expect(await screen.findByText('Welcome, Astronaut')).toBeInTheDocument()
  expect(window.location.pathname).toBe('/')
})
