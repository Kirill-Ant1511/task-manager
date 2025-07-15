import type { ITask } from '@/types/Task.types'
import { getTaskProgress } from '@/utils/task-progress'
import cn from 'clsx'
import { CheckCircle2 } from 'lucide-react'
import { useMemo } from 'react'
interface Props {
	task: ITask
}

export function ProgressBar({ task }: Props) {
	const progress = getTaskProgress(task)

	const progressText = useMemo(() => {
		if (progress >= 100)
			return (
				<>
					<CheckCircle2 className='text-white mr-1' />
					Done
				</>
			)

		return progress + '%'
	}, [progress])

	const progressColor = useMemo(() => {
		if (progress >= 100) return 'bg-teal-500'
		if (progress >= 75) return 'bg-amber-400'
		if (progress >= 50) return 'bg-primary'
		if (progress >= 25) return 'bg-rose-400'
		return 'bg-red-500'
	}, [progress])

	return (
		<div className='w-full h-12 flex items-center bg-primary/20 rounded-full relative'>
			<div
				className={cn(
					'h-full animate-stripes bg-[length:56px_56px] flex items-center justify-center text-white rounded-full cursor-default',
					progressColor
				)}
				style={{
					width: `${progress}%`,
					backgroundImage:
						'repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 0, rgba(255, 255, 255, 0.15) 20px, transparent 20px, transparent 40px)'
				}}
			>
				{progressText}
			</div>
		</div>
	)
}
