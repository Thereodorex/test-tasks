import React from 'react';
import styled from 'styled-components';

import { Option } from './Option'

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  width: 230px;
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

export const CheckBar = ({handleClick, checkData, header}) => {

  // Принимает заголовок Бара
  // Принимает функцию, генерирующую функцию для обработки нажатия клавиши
  // Принимает массив данных для создания строк в формате
  // {
  //   id: "id",            идентификатор
  //   value: "some text",  текст строки
  //   active: true         активный или нет
  // }

  const checkItems = checkData.map(checkItem => 
    <Option key={checkItem.id} value={checkItem.value} active={checkItem.active} handleClick={handleClick(checkItem.id)} />
  );

  return (
    <Wrapper>
      <TextWrapper>
        {header}
      </TextWrapper >
      {checkItems}
    </Wrapper>
  );
}