import React from 'react';
import styled from 'styled-components';

import { Box } from '../Box';

const OptionStyled = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 13px;
  text-transform: none;
  ling-height: 20px;
  background-color: ${props => props.hover} ? 'white' : '#F1FCFF';
  color: #4A4A4A;

  &:hover {
    background: #F1FCFF;
  }
`;

export const Option = ({ active, value, handleClick }) => {
  return (
    <OptionStyled onClick={handleClick}>
      <Box active={active}/>
      {value}
    </OptionStyled>
  );
}