import React, {useState} from 'react';
import styled from 'styled-components';

import { MyButton } from './Button';

const Wrapper = styled.div`
  width: 100%;
  height: 50px
  border: 1px solid #E5E5E5;
  border-radius: 50%;
  background-color: white;
  display: flex;
  flex-flow: row nowrap;
`;


export const Toggler = props => {
  const [leftActive, setLeftActive] = useState(true);
  
  const handleLeftClick = e => {
    e.preventDefault();
    setLeftActive(true);
  }

  const handleRightClick = e => {
    e.preventDefault();
    setLeftActive(false);
  }

  return (
    <Wrapper>
      <MyButton 
        border='left'
        active={leftActive}
        onClick={handleLeftClick}
        value='Самый дешёвый'
      />
      <MyButton
        border='right'
        active={!leftActive}
        onClick={handleRightClick}
        value='Самый быстрый'
      />
    </Wrapper>
  );
}