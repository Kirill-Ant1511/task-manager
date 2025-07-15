import cn from 'clsx'
import { PROJECTS } from './data/projects.data'
export default function SidebarProjects() {
	return (
		<div>
			<ul className='space-y-3.5 pl-4 mt-3'>
				{PROJECTS.map(project => (
					<li
						key={project.title}
						className='flex items-center gap-2'
					>
						<div className={cn(project.color, 'w-3 h-3')} />
						<span className='text-neutral-500'>{project.title}</span>
					</li>
				))}
			</ul>
		</div>
	)
}
