import { TASKS } from '@/mock-data/tasks.mock-data'
import type { ITask } from '@/types/Task.types'
import cn from 'clsx'
import { useEffect, useMemo, useState } from 'react'
interface Props {
	tasks: ITask[]
	setTasks: (tasks: ITask[]) => void
}

export function StatusFilter({ tasks, setTasks }: Props) {
	const [filter, setFilter] = useState('All')
	const [isOpen, setIsOpen] = useState(false)

	const activeBlockPosition = useMemo(() => {
		if (filter === 'All') {
			return 'w-6.5 left-3'
		} else if (filter === 'Not Started') {
			return 'w-21.5 left-9'
		} else if (filter === 'In Progress') {
			return 'w-21.5 left-30.5'
		} else if (filter === 'Completed') {
			return 'w-22 left-52'
		}
	}, [filter])

	useEffect(() => {
		if (filter === 'All') {
			setTasks(TASKS)
		} else if (filter === 'Not Started') {
			setTasks(TASKS.filter(task => task.status === 'Not Started'))
		} else if (filter === 'In Progress') {
			setTasks(TASKS.filter(task => task.status === 'In Progress'))
		} else if (filter === 'Completed') {
			setTasks(TASKS.filter(task => task.status === 'Completed'))
		}
	}, [filter, tasks])

	return (
		<div className='px-4 py-2 text-sm flex items-center gap-2 bg-primary/40 rounded-lg relative text-white'>
			<div
				className={cn(
					'absolute h-[65%] -z-40 bg-primary rounded-lg transition-all duration-300',
					activeBlockPosition
				)}
			/>
			<button onClick={() => setFilter('All')}>All</button>
			<button onClick={() => setFilter('Not Started')}>Not Started</button>
			<button onClick={() => setFilter('In Progress')}>In Progress</button>
			<button onClick={() => setFilter('Completed')}>Completed</button>
		</div>
	)
}
