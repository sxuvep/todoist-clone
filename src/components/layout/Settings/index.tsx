import React from 'react';
import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';

const Wrapper = styled.div`
  grid-area: 1/2;
  text-align: right;
  ul {
    float: right;
    li {
      ${(props) => props.theme.vaMixin};
      list-style-type: none;
      cursor: pointer;
      width: 30px;
      height: 30px;
      text-align: center;
      vertical-align: middle;
      float: left;

      &:hover {
        border-radius: 3px;
        background-color: rgba(255, 255, 255, $alpha: 0.2);
      }

      &.settings__add {
        margin-right: 15px;
        font-size: 30px;
      }
      &.settings__dark-mode svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const Settings = () => {
  return (
    <Wrapper>
      <ul>
        <li className="settings__add" data-testid="quick-add-task-action">
          +
        </li>
        <li className="settings__dark-mode" data-testid="dark-mode-action">
          <FaPizzaSlice />
        </li>
      </ul>
    </Wrapper>
  );
};
