interface Props {
	title: string
}

export default function SidebarHeading({ title }: Props) {
	return (
		<div className='mb-2 font-medium text-neutral-400 opacity-70'>{title}</div>
	)
}
