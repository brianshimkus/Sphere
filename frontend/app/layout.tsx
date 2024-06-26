import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import ModeToggle from '@/components/ModeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Sphere',
	description: 'A network for career building',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<ModeToggle />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
