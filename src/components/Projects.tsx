import React, { useState } from 'react';
import { useProjectsContext } from '../context/ProjectContext';
import { useSelectedProjectContext } from '../context/SelectedProjectContext';
import { Project } from './Project';
import styled from 'styled-components';

const Wrapper = styled.ul`
  padding-left: 3px;
  .project {
    display: flex;
    /* align-items: center; */
    /* ${(props) => props.theme.vaMixin('left')}; */
    padding: 5px 0;
    cursor: pointer;

    .dot {
      margin-right: 10px;
      font-size: 40px;
    }
    .delete {
      margin-left: auto;
      display: none;

      svg {
        color: #cacaca;
      }

      &.active,
      &:hover {
        font-weight: bold;
        background-color: #fff;
      }

      &:nth-child(1) {
        color: #6accbc;
      }
    }

    &:hover .delete {
      display: block;
    }
    &:nth-child(2) {
      .dot {
        color: #fad003;
      }
    }
    &:nth-child(3) {
      .dot {
        color: #ff8d85;
      }
    }
    &:nth-child(4) {
      .dot {
        color: #ff9932;
      }
    }
    &:nth-child(5) {
      .dot {
        color: #af38eb;
      }
    }
  }
`;

export const Projects = () => {
  const [active, setActive] = useState(null);
  const { projects } = useProjectsContext();
  const { setSelectedProject } = useSelectedProjectContext();

  return (
    <Wrapper>
      {projects &&
        projects.map((project: any) => (
          <li
            data-doc-id={project.docId}
            key={project.projectId}
            data-testid="project-action"
            className={
              active === project.projectId ? 'active project' : 'project'
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
    </Wrapper>
  );
};
