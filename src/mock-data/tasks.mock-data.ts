import { Status } from '@/types/Status.type'
import type { ITask } from '@/types/Task.types'
import { Plane, ShoppingBasket, SmartphoneCharging } from 'lucide-react'
import { USERS } from './profiles.mock-data'

export const TASKS: ITask[] = [
	{
		id: '1',
		icon: Plane,
		title: 'Travel App User Flow',
		dueDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
		users: [USERS[0], USERS[1]],
		subTasks: [
			{ id: '1-1', title: 'Define user personas', isCompleted: false },
			{ id: '1-1', title: 'Define user personas', isCompleted: false },
			{ id: '1-2', title: 'Create wireframes', isCompleted: true }
		],
		status: Status.InProgress,
		comments: ['', ''],
		images: ['', '', '', ''],
		resources: ['', '']
	},
	{
		id: '2',
		icon: ShoppingBasket,
		title: 'E-commerce Platform Design',
		dueDate: new Date(new Date().getTime() + 1 * 24 * 60 * 60 * 1000),
		users: [USERS[2], USERS[3], USERS[4]],
		subTasks: [
			{ id: '2-1', title: 'Research competitors', isCompleted: true },
			{ id: '2-2', title: 'Design homepage layout', isCompleted: true }
		],
		comments: ['', '', ''],
		status: Status.Completed,
		images: ['', '', '', '', ''],
		resources: ['', '', '']
	},
	{
		id: '3',
		icon: SmartphoneCharging,
		title: 'Social Media App Features',
		dueDate: new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000),
		users: [USERS[5], USERS[6], USERS[7]],
		subTasks: [
			{ id: '3-1', title: 'Implement user authentication', isCompleted: true },
			{ id: '3-1', title: 'Implement user authentication', isCompleted: true },
			{ id: '3-1', title: 'Implement user authentication', isCompleted: true },
			{ id: '3-2', title: 'Create post feed', isCompleted: false },
			{ id: '3-3', title: 'Create post feed', isCompleted: true }
		],
		status: Status.InProgress,
		comments: ['', '', '', ''],
		images: ['', '', '', '', '', ''],
		resources: ['', '', '', '']
	}
]
