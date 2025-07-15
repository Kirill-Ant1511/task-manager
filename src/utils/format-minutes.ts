export function formatMinutes(totalMinutes: number): string {
	const hours = Math.floor(totalMinutes / 60)
	const minutes = totalMinutes % 60
	return `${hours.toString()}h ${minutes.toString()}m`
}
