import { Pages } from '@/config/pages.config'
import {
	CalendarDays,
	ChartBar,
	LayoutDashboard,
	MessageCircle,
	NotebookText,
	Settings,
	User
} from 'lucide-react'
import type { IMenuItem } from '../menu/menu.types'

export const MENU_ITEMS: IMenuItem[] = [
	{
		icon: LayoutDashboard,
		title: 'Dashboard',
		href: Pages.BASE
	},
	{
		icon: MessageCircle,
		title: 'Messages',
		href: Pages.MESSAGES
	},
	{
		icon: ChartBar,
		title: 'Insight',
		href: Pages.INSIGHT
	},
	{
		icon: User,
		title: 'Team',
		href: Pages.TEAM
	},
	{
		icon: CalendarDays,
		title: 'Schedule',
		href: Pages.SCHEDULE
	},
	{
		icon: NotebookText,
		title: 'Report',
		href: Pages.REPORT
	},
	{
		icon: Settings,
		title: 'Settings',
		href: Pages.SETTINGS
	}
]
