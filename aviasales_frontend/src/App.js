import React from 'react';
import styled from 'styled-components';

import { Header } from './components/Header';
import { Main } from './components/Main';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: #E5E5E5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;
