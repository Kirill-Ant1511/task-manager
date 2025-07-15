'use client'

import Heading from '@/components/ui/Heading'
import { SearchField } from '@/components/ui/search-field/SearchField'
import { LastTasks } from './lats-tasks/LastTasks'
import { ProjectStats } from './project-stats/ProjectStats'
import { Chart } from './project-stats/chart-statistic/Chart'

interface Props {}

export function Dashboard({}: Props) {
	return (
		<div className='grid grid-cols-[2.7fr_1fr] min-h-screen'>
			<div className='h-full overflow-y-auto no-scrollbar'>
				<div className='flex items-center justify-between'>
					<Heading>Dashboard</Heading>
					<SearchField
						value=''
						onChange={() => {}}
					/>
				</div>

				<div className='grid grid-cols-[1fr_2fr] py-5 gap-4 mb-3'>
					<ProjectStats />

					<Chart />
				</div>

				<LastTasks />
			</div>

			<div className='flex items-center justify-center h-full'>CHATs</div>
		</div>
	)
}
