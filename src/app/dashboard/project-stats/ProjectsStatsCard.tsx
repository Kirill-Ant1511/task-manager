import { formatMinutes } from '@/utils/format-minutes'
import cn from 'clsx'
import Image from 'next/image'
import type { IProjectStat } from './project-stats.type'
interface Props {
	projectStat: IProjectStat
}

export function ProjectsStatsCard({ projectStat }: Props) {
	return (
		<div
			className={cn(
				projectStat.bgColor,
				'rounded-2xl p-6 relative overflow-hidden text-neutral-700 shadow-md'
			)}
		>
			<div className='flex justify-between items-center'>
				<div className='flex flex-col'>
					<span className='text-3xl font-bold mb-1'>
						{projectStat.id === '3'
							? formatMinutes(projectStat.number)
							: projectStat.number}
					</span>
					<span className='text-sm'>{projectStat.label}</span>
				</div>
				<div className='flex-shrink-0'>
					<Image
						src={projectStat.icon}
						alt={projectStat.label}
						width={80}
						height={80}
					></Image>
				</div>
			</div>
		</div>
	)
}
