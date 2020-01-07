import React from 'react';
import styled from 'styled-components';

import { Option } from './Option'

const Wrapper = styled.div`
  background-color: white;
  width: 230px;
  padding: 20px 0;
  line-height: 12px;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  font-size: 12px;
  text-transform: uppercase;
`;

const TextWrapper = styled.div`
  padding: 10px 20px;
`;

export const Filter = props => {
  return (
    <Wrapper>
      <TextWrapper>
        количество пересадок
      </TextWrapper >
      <Option value='Все' active={false} />
      <Option value='Без пересадок' active={false} />
      <Option value='1 пересадка' active={false} />
      <Option value='2 пересадки' active={true} />
      <Option value='3 пересадки' active={false} />
    </Wrapper>
  );
}