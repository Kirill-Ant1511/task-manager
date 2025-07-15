export function getDeadlineDay(dueDate: Date): string {
	const now = new Date()
	const deadline = dueDate.getTime() - now.getTime()
	const daysLeft = Math.ceil(deadline / (1000 * 60 * 60 * 24))
	return daysLeft.toString()
}
