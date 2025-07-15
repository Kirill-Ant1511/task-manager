import { Task } from '@/components/ui/Task/Task'
import { TASKS } from '@/mock-data/tasks.mock-data'
import type { ITask } from '@/types/Task.types'
import { useState } from 'react'
import { Filters } from './filters/Filters'

export function LastTasks() {
	const [tasks, setTasks] = useState<ITask[]>(TASKS)

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex items-center justify-between'>
				<h1 className='text-2xl font-semibold flex items-center gap-2 text-center'>
					Last Tasks
					<span className='text-xl opacity-50'>({tasks.length})</span>
				</h1>
				<Filters
					tasks={tasks}
					setTasks={setTasks}
				/>
			</div>
			<div className='grid grid-cols-3 gap-4 py-2 overflow-y-hidden'>
				{tasks.map(task => (
					<Task
						task={task}
						key={task.id}
					/>
				))}
			</div>
		</div>
	)
}
