import firebase from 'firebase';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsContext } from '../context/ProjectContext';
import { useSelectedProjectContext } from '../context/SelectedProjectContext';

export const Project = ({ project }: any) => {
	const [showConfirm, setShowConfirm] = useState(false);
	const { setSelectedProject } = useSelectedProjectContext();
	const { projects, setProjects } = useProjectsContext();

	const deleteProject = (docId: any) => {
		firebase
			.firestore()
			.collection('projects')
			.doc(docId)
			.delete()
			.then(() => {
				setProjects([...projects]);
				setSelectedProject('INBOX');
			});
	};

	return (
		<>
			<span className="sidebar__dot">•</span>
			<span className="sidebar__project-name">{project.name}</span>
			<span
				className="sidebar__project-delete"
				data-testid="delete-project"
				onClick={() => setShowConfirm(!showConfirm)}
				role="button"
			>
				<FaTrashAlt />
				{showConfirm && (
					<div className="project-delete-modal">
						<div className="project-delete-modal__inner">
							<p>Are you sure you want to delete this project?</p>
							<button type="button" onClick={() => deleteProject(project.docId)}>
								Delete
							</button>
							<span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
						</div>
					</div>
				)}
			</span>
		</>
	);
};
