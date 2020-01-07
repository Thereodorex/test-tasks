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
  const ticket = {
    "price":54986,
    "carrier":"S7",
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
  }
  return (
    <Wrapper>
      <Toggler />
      <Item {...ticket}/>
    </Wrapper>
  );
}

// Todo
// 1) Итем макет