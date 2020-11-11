import React, { useState } from 'react';
import { useSelectedProjectContext } from '../../../context/SelectedProjectContext';
import { AddProject } from '../../AddProject';
import { Projects } from '../../Projects';
import styled from 'styled-components';
import { ProjectsLabel } from './ProjectsLabel';
import { DefaultProjects } from './DefultProjects';

const Wrapper = styled.div`
  ${(props) => props.theme.noSelect};
  width: 266px;
  height: calc(100vh);
  padding-top: 74px;
  position: fixed;
  overlay-x: hidden;
  overlay-y: hidden;
  border-right: ${(props) => props.theme.variables.genericBorder};
  background-color: #fafafa;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Sidebar = () => {
  const { setSelectedProject } = useSelectedProjectContext();
  const [active, setActive] = useState('inbox');
  const [showProjects, setShowProjects] = useState(true);

  return (
    <Wrapper data-testid="sidebar">
      <DefaultProjects
        active={active}
        onselectedProject={(selected) => setSelectedProject(selected)}
        onActive={(active) => setActive(active)}
      />
      <ProjectsLabel
        showProjects={showProjects}
        onShowProjects={(showProject) => setShowProjects(showProject)}
      />

      <Projects />

      <AddProject />
    </Wrapper>
  );
};
