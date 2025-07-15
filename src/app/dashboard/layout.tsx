import Sidebar from '@/components/Layout/sidebar/Sidebar'
import type { PropsWithChildren } from 'react'

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<div className='grid grid-cols-[250px_1fr] min-h-screen text-foreground'>
			<Sidebar />
			<main className='p-5'>{children}</main>
		</div>
	)
}
