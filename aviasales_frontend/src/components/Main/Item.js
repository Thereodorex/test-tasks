import React from 'react';
import styled from 'styled-components';

import { parseDuration, parseDate, parsePrice, declens } from '../../utils';

const ItemStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-flow: column nowrap;
`;

const RowStyled = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Cell = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;

  header {
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: #A0B0B9;
  }

  main {
    font-size: 14px;
    line-height: 21px;
    font-weight: 600;
    color: #4A4A4A;
  }
`;

const Price = styled.div`
  flex: 2 1 0;
  display: flex;
  align-items: left;
  font-size: 24px;
  line-height: 24px;
  color: #2196F3;
`;

const Logo = styled.div`
  flex: 1 0 0;
  height: 36px;
`;

const Row = ({stops, duration, date, origin, destination}) => {
  return (
    <RowStyled>
      <Cell>
        <header>{origin} - {destination}</header>
        <main>{parseDate(date, duration)}</main>
      </Cell>
      <Cell>
        <header>В пути</header>
        <main>{parseDuration(duration)}</main>
      </Cell>
      <Cell>
        <header>
          {declens(stops.length, ['Пересадка', 'Пересадки', 'Пересадок'])}
          </header>
        <main>{stops.join(',')}</main>
      </Cell>
    </RowStyled>
  );
}

export const Item = ({segments, price, carrier}) => {
  return (
    <ItemStyled>
      <RowStyled>
        <Price>{parsePrice(price)}</Price>
        <Logo><img src={`http://pics.avs.io/99/36/{${carrier}}.png`} alt={carrier + " logo"} /></Logo>
      </RowStyled>
      <Row {...segments[0]} />
      <Row {...segments[1]} />
    </ItemStyled>
  );
}