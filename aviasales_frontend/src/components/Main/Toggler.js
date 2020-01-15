import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch} from 'react-redux';

import { sortByTimeAction } from '../../features/tickets/ducks';
import { sortByPriceAction } from '../../features/tickets/ducks';

import { MyButton } from '../../ui/Button';

const TogglerStyled = styled.div`
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
  const [active, setActive] = useState('left');

  const handleClick = (action, id) => e => {
    e.preventDefault();
    dispatch(action);
    setActive(id);
  }

  return (
    <TogglerStyled>
      <MyButton 
        className='left'
        active={active === 'left'}
        onClick={handleClick(sortByPriceAction(), 'left')}
        value='Самый дешёвый'
      />
      <MyButton
        className='right'
        active={active === 'right'}
        onClick={handleClick(sortByTimeAction(), 'right')}
        value='Самый быстрый'
      />
    </TogglerStyled>
  );
}