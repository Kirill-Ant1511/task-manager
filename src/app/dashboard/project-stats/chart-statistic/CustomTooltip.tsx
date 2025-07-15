export function CustomTooltip({ active, payload, label }: any) {
	if (!active || !payload || payload.length === 0) {
		return null
	}
	return (
		<div className='p-2 bg-primary text-white rounded-full'>
			<span className='font-medium'>Projects {payload[0].value}</span>
		</div>
	)
}
