import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import { toggle } from '../../actions/filter';

import { Option } from './Option'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  width: 230px;
  // max-height: 150px;
  padding: 10px 0;
  border-radius: 5px;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const TextWrapper = styled.div`
  padding: 10px 20px;
`;

export const Filter = props => {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleClick = flag => () => dispatch(toggle(flag));

  return (
    <Wrapper>
      <TextWrapper>
        количество пересадок
      </TextWrapper >
      <Option value='Все' active={filter.all} handleClick={handleClick('all')} />
      <Option value='Без пересадок' active={filter.transferNo} handleClick={handleClick('transferNo')}/>
      <Option value='1 пересадка' active={filter.transferOne} handleClick={handleClick('transferOne')} />
      <Option value='2 пересадки' active={filter.transferTwo} handleClick={handleClick('transferTwo')} />
      <Option value='3 пересадки' active={filter.tranferThree} handleClick={handleClick('transferThree')} />
    </Wrapper>
  );
}