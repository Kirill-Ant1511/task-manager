import { ChevronDown } from 'lucide-react'
import { PROFILE } from './data/profile.data'

export default function SidebarProfile() {
	return (
		<div className='mb-12 flex items-center gap-2.5 bg-primary/50 p-1 rounded-full'>
			<div className='w-8 h-8 bg-primary rounded-full shrink-0 ' />
			<div className='leading-snug'>
				<div className='font-medium text-white'>{PROFILE.name}</div>
				<div className='text-xs font-medium opacity-60 text-white'>
					{PROFILE.email}
				</div>
			</div>
			<div>
				<ChevronDown
					size={16}
					className='opacity-50 ml-1'
				/>
			</div>
		</div>
	)
}
