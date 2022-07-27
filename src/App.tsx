import React from 'react';
import BubleBox from './components/BubleBox';
import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      <BubleBox />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background: #282c34;
  width: 100%;
  min-height: 100vh;
  *,
  *::before {
    box-sizing: border-box;
  }
`;

export default App;
