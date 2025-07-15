'use client'

import { Leaf, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	const [mount, setMount] = useState(false)

	useEffect(() => {
		setMount(true)
	}, [])

	if (mount === false) {
		return null
	}
	return (
		<button
			onClick={() => {
				if (theme === 'dark') {
					setTheme('light')
				} else if (theme === 'light') {
					setTheme('green')
				} else if (theme === 'green') {
					setTheme('dark')
				}
			}}
			className='p-2 bg-background text-black dark:text-white rounded-full mt-3  transition-color duration-300 mr-3 inset-shadow-xs inset-shadow-primary cursor-pointer'
		>
			{theme === 'dark' ? (
				<Moon className='w-5 h-5' />
			) : theme === 'light' ? (
				<Sun className='w-5 h-5' />
			) : (
				<Leaf className='w-5 h-5' />
			)}
		</button>
	)
}
