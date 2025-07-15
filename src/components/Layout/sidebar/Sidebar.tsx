'use client'

import SidebarProjects from './SibarProjects'
import SidebarHeading from './SidebarHeading'
import SidebarMenu from './SidebarMenu'
import SidebarProfile from './SidebarProfile'

export default function Sidebar() {
	return (
		<aside className='p-5 bg-background transition-colors duration-300 overflow-y-auto'>
			<SidebarHeading title='Account' />
			<SidebarProfile />
			<SidebarHeading title='Main Menu' />
			<SidebarMenu />
			<SidebarHeading title='Projects' />
			<SidebarProjects />
		</aside>
	)
}
