import { PROJECT_STATS_DATA } from '../data/project-stats.data'
import { ProjectsStatsCard } from './ProjectsStatsCard'

export function ProjectStats() {
	return (
		<div className='space-y-4'>
			{PROJECT_STATS_DATA.map(projectStat => (
				<ProjectsStatsCard
					key={projectStat.id}
					projectStat={projectStat}
				/>
			))}
		</div>
	)
}
