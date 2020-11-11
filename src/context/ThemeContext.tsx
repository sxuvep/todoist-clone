import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  variables: {
    genericBoxShadow:
      'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 4px 11px',
    genericBorder: '1px solid #f1f1f1',
    genericBg: '#db4c3f',
  },
  fonts: ['Roboto', 'sans-serif'],
  vaMixin: (vaAlign = 'center') => `{
        display: flex;
        align-items: center;
        justify-content: ${vaAlign === 'center' ? 'center' : 'left'}
    } `,
  noSelect: () => `{
        -webkit-touch-callout: none;
	    -webkit-user-select: none;
	    -khtml-user-select: none;
	    -moz-user-select: none;
	    -ms-user-select: none;
	    user-select: none;
    }`,
};

export const Theme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
