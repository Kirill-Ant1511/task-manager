import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from 'recharts'
import type { ChartData } from 'recharts/types/state/chartDataSlice'
import { CustomTooltip } from './CustomTooltip'

interface Props {
	data: ChartData
}

export function ChartStatistic({ data }: Props) {
	return (
		<ResponsiveContainer
			width='100%'
			height={300}
		>
			<AreaChart
				data={data}
				margin={{ top: 0, right: 20, left: -20, bottom: 0 }}
			>
				<defs>
					<linearGradient
						id='linearColor'
						x1={0}
						y1={0}
						x2={0}
						y2={1}
					>
						<stop
							offset='7%'
							stopColor='#8884d8'
							stopOpacity={0.8}
						/>
						<stop
							offset='93%'
							stopColor='#8884d8'
							stopOpacity={0}
						/>
					</linearGradient>
				</defs>

				<XAxis
					dataKey='label'
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: '#6B7280' }}
				/>
				<YAxis
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: '#6B7280' }}
					domain={[0, 'dataMax + 10']}
				/>
				<CartesianGrid
					stroke='#F3F4F6'
					strokeDasharray='0'
					vertical={false}
				/>
				<Tooltip content={<CustomTooltip />} />
				<Area
					type='bump'
					dataKey='projects'
					stroke='#8884d8'
					fill='url(#linearColor)'
				/>
			</AreaChart>
		</ResponsiveContainer>
	)
}
