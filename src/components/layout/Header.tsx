import React from 'react';
import { Logo } from './Logo';
import { Settings } from './Settings';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-bottom: 1px solid #ca2100;
  background-color: ${(props) => props.theme.variables.genericBg};
  transition: height 200ms ease-in;
  box-shadow: 0 1px 2px, rgba(0, 0, 0, 0.15);
  height: 44px;
  z-index: 400;
  position: fixed;
  top: 0;
  width: 100%;
  @media (max-width: 900px) {
    padding: 0 10px;
  }
  nav {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    max-width: 922px;
    margin: auto;
    height: 44px;
  }
  p,
  li {
    color: white;
  }
`;

export const Header = () => {
  return (
    <Wrapper data-testid="header">
      <nav>
        <Logo />
        <Settings />
      </nav>
    </Wrapper>
  );
};
