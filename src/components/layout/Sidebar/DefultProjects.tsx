import React, { FC } from 'react';
import { FaInbox, FaRegCalendar, FaRegCalendarAlt } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  onselectedProject: (s: string) => void;
  onActive: (s: string) => void;
  active: string | undefined;
}

const Wrapper = styled.ul`
  li {
    padding: 10px 0px 10px 10px;
    list-style-type: none;
    color: #333;
    display: flex;
    cursor: pointer;
    line-height: 1.5;
    font-size: 15px;

    span:first-of-type {
      margin-right: 10px;
      svg {
        width: 18px;
        height: 18px;
        color: #555;
      }
    }

    &.active,
    &:hover {
      font-weight: bold;
      background-color: #fff;
    }
  }
`;

export const DefaultProjects: FC<Props> = ({
  active,
  onActive,
  onselectedProject,
}) => {
  return (
    <Wrapper>
      <li
        data-testid="inbox"
        className={active === 'inbox' ? 'active' : undefined}
        onClick={() => {
          onselectedProject('INBOX');
          onActive('inbox');
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
          onselectedProject('TODAY');
          onActive('today');
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
          onselectedProject('NEXT_7');
          onActive('next_7');
        }}
      >
        <span>
          <FaRegCalendarAlt />
        </span>
        <span>Next 7 days</span>
      </li>
    </Wrapper>
  );
};
