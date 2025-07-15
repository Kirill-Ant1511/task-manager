import type { ITask } from '@/types/Task.types'
import { getDeadlineDay } from '@/utils/deadline-day'
import { ImageIcon, Link, MessageSquareMore, Pen, Plus } from 'lucide-react'
import Image from 'next/image'
import { ProgressBar } from '../ProgressBar'

interface Props {
	task: ITask
}

export function Task({ task }: Props) {
	const dueDate = getDeadlineDay(task.dueDate)
	return (
		<div className='bg-background p-3 rounded-2xl shadow-sm h-50'>
			<div className='flex items-center justify-between w-full gap-2'>
				<div className='p-2 shrink-0 rounded-full bg-primary/40 self-start'>
					<task.icon />
				</div>
				<span className='text-sm'>{task.title}</span>

				<div className='flex -space-x-1.5 w-[40%]'>
					{task.users.map(user => (
						<div
							key={user.id}
							className='shrink-0'
						>
							<Image
								src={user.avatarUrl}
								alt={user.name}
								width={24}
								height={24}
								className='rounded-full'
							/>
						</div>
					))}
				</div>
			</div>

			<div className='flex items-center justify-center w-[65%] mb-4'>
				<span className='text-xs opacity-50'>Due: {dueDate} days</span>
			</div>

			<div className='mb-4'>
				<ProgressBar task={task} />
			</div>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-3 text-xs'>
					<span>
						<MessageSquareMore size={16} />
						{task.comments.length}
					</span>

					<span>
						<ImageIcon size={16} />
						{task.images.length}
					</span>

					<span>
						<Link size={16} />
						{task.resources.length}
					</span>
				</div>

				<div className='flex items-center gap-2 text-xs'>
					<span className='cursor-pointer p-2 rounded-full flex items-center justify-center bg-primary'>
						<Plus size={20} />
					</span>
					<span className='cursor-pointer p-2 rounded-full flex items-center justify-center border-1 border-primary'>
						<Pen size={20} />
					</span>
				</div>
			</div>
		</div>
	)
}
