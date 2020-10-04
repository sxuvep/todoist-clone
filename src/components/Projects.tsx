import React, { useState } from 'react';
import { useProjectsContext } from '../context/ProjectContext';
import { useSelectedProjectContext } from '../context/SelectedProjectContext';
import { Project } from './Project';

export const Projects = () => {
	const [active, setActive] = useState(null);
	const { projects } = useProjectsContext();
	const { setSelectedProject } = useSelectedProjectContext();

	return (
		<>
			{projects &&
				projects.map((project: any) => (
					<li
						data-doc-id={project.docId}
						key={project.projectId}
						data-testid="project-action"
						className={
							active === project.projectId
								? 'active sidebar__project'
								: 'sidebar__project'
						}
						onClick={() => {
							setActive(project.projectId);
							setSelectedProject(project.projectId);
						}}
						onKeyDown={() => {
							setActive(project.projectId);
							setSelectedProject(project.projectId);
						}}
					>
						<Project project={project} />
					</li>
				))}
		</>
	);
};
