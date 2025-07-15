import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './Providers'

const font = Poppins({
	variable: '--font-sans',
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg'
	},
	title: {
		absolute: 'Task Hub',
		template: '%s & Task Hub'
	},
	description: 'Best task menage web app'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${font.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
