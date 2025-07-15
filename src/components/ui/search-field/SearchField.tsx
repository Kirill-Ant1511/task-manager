import { Search } from 'lucide-react'

interface Props {
	placeholder?: string
	onChange: (value: string) => void
	value: string
}

export function SearchField({
	placeholder = 'Search something...',
	onChange,
	value
}: Props) {
	return (
		<div className='flex items-center w-full max-w-sm p-4 bg-background rounded-full shadow-sm transition-colors duration-150'>
			<Search
				size={20}
				className='text-neutral-500 mr-2'
			/>
			<input
				type='search'
				value={value}
				onChange={e => {
					onChange(e.target.value)
				}}
				placeholder={placeholder}
				className='focus:outline-none bg-transparent w-full text-sm placeholder:text-foreground/50'
			/>
		</div>
	)
}
