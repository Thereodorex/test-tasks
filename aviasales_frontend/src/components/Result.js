import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import { Toggler } from './Toggler/Toggler.js';
import { Item } from './Item';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 500px;
`;

const compareByPrice = (a, b) => a.price > b.price ? 1 : -1;

const compareByDuration = (a, b) => a.segments[0].duration + a.segments[1].duration > b.segments[0].duration + b.segments[1].duration ? 1 : -1;

const filtered = (tickets, filter) => {
  console.log(tickets.length);
  const res = tickets.filter(ticket => {
    if (filter.all) return true;
    let s1 = ticket.segments[0].stops.length;
    let s2 = ticket.segments[1].stops.length;
    if (s1 > 3 || s2 > 3) return false;
    if ((s1 == 3 || s2 == 3) && !filter.transferThree) return false;
    if ((s1 == 2 || s2 == 2) && !filter.transferTwo) return false;
    if ((s1 == 1 || s2 == 1) && !filter.transferOne) return false;
    if ((s1 == 0 || s2 == 0) && !filter.transferNo) return false;
    return true;
  });
  res.sort(filter.fast ? compareByDuration : compareByPrice);
  return res.slice(0, 5);
}

export const Result = props => {
  const tickets = useSelector(state => state.tickets);
  const filter = useSelector(state => state.filter);

  let i = 0;

  const listItems = filtered(tickets, filter).map(ticket =>
    <Item key={i++} {...ticket} />
  );

  return (
    <Wrapper>
      <Toggler />
      {listItems}
    </Wrapper>
  );
}