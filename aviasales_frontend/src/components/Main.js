import React from 'react';
import styled from 'styled-components';

import { Filter } from './Filter/Filter';
import { Result } from './Result';

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 750px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Main = props => {
  return (
    <Wrapper>
      <Filter></Filter>
      <Result></Result>
    </Wrapper>
  );
}