import React, { useEffect } from 'react';
import { useTasks } from '../hooks';
import { Checkbox } from './Checkbox';
import { collatedTasks } from '../constants';
import { useSelectedProjectContext } from '../context/SelectedProjectContext';
import { useProjectsContext } from '../context/ProjectContext';
import { collatedTasksExist, getCollatedTitle, getTitle } from '../helpers';

export const Tasks = () => {
	const { selectedProject } = useSelectedProjectContext();
	const { projects } = useProjectsContext();
	const { tasks } = useTasks(selectedProject);

	let projectName = '';

	if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
		projectName = getTitle(projects, selectedProject)?.name;
	}

	if (collatedTasksExist(selectedProject) && selectedProject) {
		projectName = getCollatedTitle(collatedTasks, selectedProject)?.name;
	}

	useEffect(() => {
		document.title = `${projectName}: Todoist`;
	});

	console.log(tasks);

	return (
		<div className="tasks" data-testid="tasks">
			<h2 data-testid="project-name">{projectName}</h2>
			<ul className="tasks__list">
				{tasks.map((task: any) => (
					<li key={task.id}>
						<Checkbox id={task.id} />
						<span>{task.task}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
