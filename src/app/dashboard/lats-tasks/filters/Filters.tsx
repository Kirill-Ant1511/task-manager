import { TASKS } from '@/mock-data/tasks.mock-data'
import { Status } from '@/types/Status.type'
import type { ITask } from '@/types/Task.types'
import cn from 'clsx'
import { ArrowDownWideNarrow } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
interface Props {
	tasks: ITask[]
	setTasks: (tasks: ITask[]) => void
}

export function Filters({ tasks, setTasks }: Props) {
	const [sortByDueDate, setSortByDueDate] = useState<'asc' | 'desc'>('asc')
	const [filterByStatus, setFilterByStatus] = useState<Status>(Status.All)

	const activeBlockPositionByDueDate = useMemo(() => {
		switch (sortByDueDate) {
			case 'asc':
				return 'w-9 right-14'
			case 'desc':
				return 'w-11 right-2.5'
		}
	}, [sortByDueDate])

	const activeBlockPositionByStatus = useMemo(() => {
		if (filterByStatus === Status.All) {
			return 'w-6.5 left-3'
		} else if (filterByStatus === Status.NotStarted) {
			return 'w-21.5 left-9'
		} else if (filterByStatus === Status.InProgress) {
			return 'w-21.5 left-30.5'
		} else if (filterByStatus === Status.Completed) {
			return 'w-22 left-52'
		}
	}, [filterByStatus])

	useEffect(() => {
		const filtered = TASKS.filter(task => {
			switch (filterByStatus) {
				case Status.All:
					return TASKS
				case Status.NotStarted:
					return task.status === 'Not Started'
				case Status.InProgress:
					return task.status === 'In Progress'
				case Status.Completed:
					return task.status === 'Completed'
				default:
					return []
			}
		})

		setTasks(
			filtered.sort((task1, task2) => {
				if (sortByDueDate === 'asc') {
					return task1.dueDate.getTime() - task2.dueDate.getTime()
				} else {
					return task2.dueDate.getTime() - task1.dueDate.getTime()
				}
			})
		)
	}, [filterByStatus, sortByDueDate])
	return (
		<div className='flex gap-5'>
			<button
				onClick={() => {
					setSortByDueDate(sortByDueDate === 'asc' ? 'desc' : 'asc')
				}}
				className='flex gap-2 items-center px-3 py-2 bg-primary/40 rounded-xl relative text-white'
			>
				<div
					className={cn(
						'h-[60%] absolute bg-primary -z-20 rounded-lg transition-all duration-500',
						activeBlockPositionByDueDate
					)}
				/>

				<ArrowDownWideNarrow
					size={15}
					className={cn(
						sortByDueDate === 'asc' ? 'rotate-0' : '-rotate-180',
						'transition-transform duration-300'
					)}
				/>

				<span>Asc</span>
				<span>Desc</span>
			</button>
			<div className='px-4 py-2 text-sm flex items-center gap-2 bg-primary/40 rounded-lg relative text-white'>
				<div
					className={cn(
						'absolute h-[65%] -z-40 bg-primary rounded-lg transition-all duration-300',
						activeBlockPositionByStatus
					)}
				/>
				<button onClick={() => setFilterByStatus(Status.All)}>All</button>
				<button onClick={() => setFilterByStatus(Status.NotStarted)}>
					Not Started
				</button>
				<button onClick={() => setFilterByStatus(Status.InProgress)}>
					In Progress
				</button>
				<button onClick={() => setFilterByStatus(Status.Completed)}>
					Completed
				</button>
			</div>
		</div>
	)
}
