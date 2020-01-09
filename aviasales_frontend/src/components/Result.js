import React from 'react';
import styled from 'styled-components';

import { Toggler } from './Toggler/Toggler.js';
import { Item } from './Item';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 500px;
`;

export const Result = props => {
  const tickets = [{
    "price": 54986,
    "carrier": "S7",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2020-01-11T03:54:00.000Z",
        "stops": ["DXB"],
        "duration":1634
      },
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2020-01-31T09:50:00.000Z",
        "stops": [
          "DXB",
          "SIN"
        ],
        "duration": 1983
      }
    ]
  },
  {
    "price": 54986,
    "carrier": "S7",
    "segments": [
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2020-01-11T03:54:00.000Z",
        "stops": ["DXB"],
        "duration":1634
      },
      {
        "origin": "MOW",
        "destination": "HKT",
        "date": "2020-01-31T09:50:00.000Z",
        "stops": [
          "DXB",
          "SIN"
        ],
        "duration": 1983
      }
    ]
  }];

  let i = 0;

  const listItems = tickets.map(ticket =>
    <Item key={i++} {...ticket} />
  );

  return (
    <Wrapper>
      <Toggler />
      {listItems}
    </Wrapper>
  );
}

// Todo
// 1) Итем макет