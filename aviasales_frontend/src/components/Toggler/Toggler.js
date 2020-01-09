import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { toggle } from '../../actions/filter';

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

  const dispatch = useDispatch();
  const fast = useSelector(state => state.filter.fast);
  
  const handleLeftClick = e => {
    e.preventDefault();
    if (fast) {
      dispatch(toggle('fast'));
    }
  }

  const handleRightClick = e => {
    e.preventDefault();
    if (!fast) {
      dispatch(toggle('fast'));
    }
  }

  return (
    <Wrapper>
      <MyButton 
        border='left'
        active={!fast}
        onClick={handleLeftClick}
        value='Самый дешёвый'
      />
      <MyButton
        border='right'
        active={fast}
        onClick={handleRightClick}
        value='Самый быстрый'
      />
    </Wrapper>
  );
}