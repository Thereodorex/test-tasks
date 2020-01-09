import React from 'react';
import styled from 'styled-components';

import styles from './styles.css';

const Wrapper = styled.div`
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

const Row = props => {
  return (
    <RowStyled>
      <Cell>
        <header>{props.origin} - {props.destination}</header>
        <main>{props.date.slice(0, 10)}</main>
      </Cell>
      <Cell>
        <header>В пути</header>
        <main>{props.duration}</main>
      </Cell>
      <Cell>
        <header>
          {props.stops.length} {props.stops.length == 1 ? 'Пересадка'
          : props.stops.length != 0 && props.stops.length < 5 ? 'Пересадки'
          : 'Пересадок'}
          </header>
        <main>{props.stops.join(',')}</main>
      </Cell>
    </RowStyled>
  );
}

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

export const Item = props => {
  return (
    <Wrapper>
      <RowStyled>
        <Price>{props.price} P</Price>
        <Logo><img src={`http://pics.avs.io/99/36/{${props.carrier}}.png`} alt={props.carrier + " logo"} /></Logo>
      </RowStyled>
      <Row {...props.segments[0]} />
      <Row {...props.segments[1]} />
    </Wrapper>
  );
}