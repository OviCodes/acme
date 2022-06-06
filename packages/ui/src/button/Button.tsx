import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  onClick: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}
