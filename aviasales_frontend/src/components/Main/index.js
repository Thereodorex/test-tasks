import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Filter } from './Filter.js';
import { Toggler } from './Toggler.js';
import { Item } from './Item.js';

import { ticketsSelector } from '../../features/tickets/selectors';

const MainStyled = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  max-width: 750px;
  justify-content: space-between;
  align-items: flex-start;
`;

const Result = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 500px;
`;

export const Main = () => {
  const tickets = useSelector(ticketsSelector);

  const listItems = tickets.map(ticket =>
    <Item key={ticket.id} {...ticket} />
  );

  return (
    <MainStyled>
      <Filter></Filter>
      <Result>
        <Toggler />
        {listItems}
      </Result>
    </MainStyled>
  );
}