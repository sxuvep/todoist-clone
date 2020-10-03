import { CollatedTask, collatedTasks } from '../constants';

export const collatedTasksExist = (selectedProject: any) => {
	return collatedTasks.filter((task: CollatedTask) => task.key === selectedProject);
};
