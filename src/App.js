import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { appTheme } from './theme';
import { Wizard } from './_components/Wizard';

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CSSReset />
      <Wizard />
    </ThemeProvider>
  );
}

export default App;
