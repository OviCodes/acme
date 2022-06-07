import { ReactNode } from 'react'

import styles from './Heading.module.css'

export interface HeadingProps {
  children: ReactNode
}

export default function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>
}
