import '@testing-library/jest-dom/vitest'

vi.mock('./components/fade-in', () => ({
  default: ({ children }: { children?: unknown }) => children,
}))
