import type { ITask } from '@/types/Task.types'

export function getTaskProgress(task: ITask): number {
	const completedTasks = task.subTasks.filter(subtask => {
		return subtask.isCompleted
	})
	return Math.round((completedTasks.length / task.subTasks.length) * 100)
}
