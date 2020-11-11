import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-left: '8px';
  grid-area: 1/1;
  img {
    width: 24px;
  }
`;

export const Logo = () => {
  return (
    <Wrapper>
      <img src="/images/logo.png" alt="Todoist" />
    </Wrapper>
  );
};
