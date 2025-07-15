import type { ITask } from '@/types/Task.types'
import { getDeadlineDay } from '@/utils/deadline-day'
import cn from 'clsx'
import { ArrowDownWideNarrow } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
interface Props {
	tasks: ITask[]
	setTasks: (tasks: ITask[]) => void
}

// TODO: Сделать фильтрацию по дедлану(либо выппадающий список либо просто переключатель)
export function DueDateFilter({ tasks, setTasks }: Props) {
	const [filter, setFilter] = useState<'asc' | 'desc'>('asc')

	const activeBlockPosition = useMemo(() => {
		switch (filter) {
			case 'asc':
				return 'w-9 right-14'
			case 'desc':
				return 'w-11 right-2.5'
		}
	}, [filter])

	useEffect(() => {
		let res: ITask[]
		if (filter === 'asc') {
			res = tasks.sort(
				(a, b) =>
					Number(getDeadlineDay(a.dueDate)) - Number(getDeadlineDay(b.dueDate))
			)
		} else {
			res = tasks.sort(
				(a, b) =>
					Number(getDeadlineDay(b.dueDate)) - Number(getDeadlineDay(a.dueDate))
			)
		}
		setTasks(res)
	}, [filter, tasks])

	return (
		<button
			onClick={() => {
				setFilter(filter === 'asc' ? 'desc' : 'asc')
			}}
			className='flex gap-2 items-center px-3 py-2 bg-primary/40 rounded-xl relative text-white'
		>
			<div
				className={cn(
					'h-[60%] absolute bg-primary -z-20 rounded-lg transition-all duration-500',
					activeBlockPosition
				)}
			/>

			<ArrowDownWideNarrow
				size={15}
				className={cn(
					filter === 'asc' ? 'rotate-0' : '-rotate-180',
					'transition-transform duration-300'
				)}
			/>

			<span>Asc</span>
			<span>Desc</span>
		</button>
	)
}
