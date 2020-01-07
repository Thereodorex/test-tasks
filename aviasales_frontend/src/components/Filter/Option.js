import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import { Box } from './Box';

const Wrapper = styled.div`
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

export const Option = props => {
  const [active, setActive] = useState(props.active);

  const handleClick = e => {
    e.preventDefault();
    setActive(active ? false : true);
  }

  return (
    <Wrapper onClick={handleClick}>
      <Box active={active}/>
      {props.value}
    </Wrapper>
  );
}