import React from 'react';
import BubbleBox from './components/BubbleBox';
import styled, { ThemeProvider } from 'styled-components';
import { mainTheme } from './GlobalStyle/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <AppWrapper>
        <BubbleBox />
      </AppWrapper>
    </ThemeProvider>
  );
}

const AppWrapper = styled.div`
  background: ${(props) => props.theme.appColor};
  width: 100%;
  min-height: 100vh;
`;

export default App;
