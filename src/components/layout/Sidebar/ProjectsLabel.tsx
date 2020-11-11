import React, { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  showProjects: boolean;
  onShowProjects: (p: boolean) => void;
}
const Wrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  border-bottom: ${(props) => props.theme.variables.genericBorder};
  padding-left: 10px;
  cursor: pointer;

  span {
    color: #0000008a;
    margin-right: 10px;

    svg.hidden-projects {
      transform: rotate(-90deg);
    }
  }

  h2 {
    margin: 0;
    color: #333;
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 20px;
  }
`;
export const ProjectsLabel: FC<Props> = ({ showProjects, onShowProjects }) => {
  return (
    <Wrapper onClick={() => onShowProjects(!showProjects)}>
      <span>
        <FaChevronDown
          className={!showProjects ? 'hidden-projects' : undefined}
        />
      </span>
      <h2>Projects</h2>
    </Wrapper>
  );
};
