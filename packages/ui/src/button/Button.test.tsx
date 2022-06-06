import { render, screen } from '@testing-library/react'

import Button from './Button'

it('renders the button', () => {
  render(<Button onClick={() => console.log('clicked...')}>Click me!</Button>)
  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
})
