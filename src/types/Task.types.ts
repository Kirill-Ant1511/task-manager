import type { LucideIcon } from 'lucide-react'
import type { IProfile } from './Profile.types'
import type { Status } from './Status.type'

export interface ISubTask {
	id: string
	title: string
	isCompleted: boolean
}

// Omit позволяет исключить поле для наследования из интерфейса
export interface ITask extends Omit<ISubTask, 'isCompleted'> {
	id: string
	icon: LucideIcon
	title: string
	dueDate: Date
	users: IProfile[]
	subTasks: ISubTask[]
	comments: string[]
	images: string[]
	resources: string[]
	status: Status
}
