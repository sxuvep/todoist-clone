import React, { useState } from 'react';
import { FaChevronDown, FaInbox, FaRegCalendarAlt, FaRegCalendar } from 'react-icons/fa';
import { useSelectedProjectContext } from '../../context/SelectedProjectContext';
import { AddProject } from '../AddProject';
import { Projects } from '../Projects';

export const Sidebar = () => {
	const { setSelectedProject } = useSelectedProjectContext();
	const [active, setActive] = useState('inbox');
	const [showProjects, setShowProjects] = useState(true);

	return (
		<div className="sidebar" data-testid="sidebar">
			<ul className="sidebar__generic">
				<li
					data-testid="inbox"
					className={active === 'inbox' ? 'active' : undefined}
					onClick={() => {
						setSelectedProject('INBOX');
						setActive('inbox');
					}}
				>
					<span>
						<FaInbox />
					</span>
					<span>Inbox</span>
				</li>
				<li
					data-testid="today"
					className={active === 'today' ? 'active' : undefined}
					onClick={() => {
						setSelectedProject('TODAY');
						setActive('today');
					}}
				>
					<span>
						<FaRegCalendar />
					</span>
					<span>Today</span>
				</li>
				<li
					data-testid="next_7"
					className={active === 'next_7' ? 'active' : undefined}
					onClick={() => {
						setSelectedProject('NEXT_7');
						setActive('next_7');
					}}
				>
					<span>
						<FaRegCalendarAlt />
					</span>
					<span>Next 7 days</span>
				</li>
			</ul>
			<div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
				<span>
					<FaChevronDown className={!showProjects ? 'hidden-projects' : undefined} />
				</span>
				<h2>Projects</h2>
			</div>
			<ul className="sidebar__projects">
				<Projects />
			</ul>
			<AddProject />
		</div>
	);
};
