import Link from 'next/link'
import { MENU_ITEMS } from './data/main-menu.data'

export default function SidebarMenu() {
	return (
		<nav className='mb-12 mt-3'>
			<ul className='space-y-4'>
				{MENU_ITEMS.map(item => (
					<li key={item.href}>
						<Link
							href={item.href}
							className='text-neutral-500 flex items-center justify-between transition-colors hover:text-violet-600 hover:text-shadow-2xs hover:text-shadow-violet-700 pl-2'
						>
							<span className='flex items-center gap-2'>
								<item.icon width={20} />
								<span>{item.title}</span>
							</span>
							{item.title === 'Messages' && (
								<span className='text-primary bg-purple-200 rounded-lg px-2 text-xs font-medium dark:bg-purple-500/40'>
									4
								</span>
							)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
