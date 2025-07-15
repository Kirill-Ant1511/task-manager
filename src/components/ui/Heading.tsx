'use client'
import type { ReactNode } from 'react'
import { ThemeToggle } from '../Layout/sidebar/ThemeToggle'

interface Props {
	children: ReactNode
}

export default function Heading({ children }: Props) {
	return (
		<h1 className='text-3xl font-medium'>
			<ThemeToggle />
			{children}
		</h1>
	)
}
