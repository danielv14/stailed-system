import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { Theme } from 'styled-system';

export const ThemeProvider: React.FC<{ theme: Theme }> = ({ children, theme }) => 
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
ThemeProvider.displayName = 'ThemeProvider';
