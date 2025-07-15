'use client'
import { useState } from 'react'
import { ChartStatistic } from './ChartStatistic'
import { MonthlyData, YearsData } from './data/chart-statistic.data'

export function Chart() {
	const [chartType, setChartType] = useState<'Monthly' | 'Yearly'>('Yearly')
	const [isOpenFilters, setIsOpenFilters] = useState(false)
	return (
		<div className='bg-background rounded-lg p-5 shadow-md h-full'>
			<div className='flex items-center justify-between mb-6'>
				<h1 className='text-xl font-medium'>Project Statistic</h1>
				<div className='relative'>
					<button
						className='py-2 px-4 bg-neutral-200 dark:bg-neutral-800 rounded-2xl'
						onClick={() => setIsOpenFilters(!isOpenFilters)}
					>
						{chartType}
					</button>

					{isOpenFilters && (
						<div className='absolute right-10 top-12 bg-neutral-500/30 z-50 p-3 rounded-lg flex flex-col items-center gap-2'>
							<button
								onClick={() => {
									setChartType('Monthly')
									setIsOpenFilters(false)
								}}
								className='bg-background rounded-full px-4 py-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors w-[100%]'
							>
								Monthly
							</button>
							<button
								onClick={() => {
									setChartType('Yearly')
									setIsOpenFilters(false)
								}}
								className='bg-background rounded-full px-4 py-2 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors w-[100%]'
							>
								Yearly
							</button>
						</div>
					)}
				</div>
			</div>
			<ChartStatistic data={chartType === 'Yearly' ? YearsData : MonthlyData} />
		</div>
	)
}
