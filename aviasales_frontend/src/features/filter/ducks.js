import { createAction, createReducer } from 'redux-act';

export const TOGGLE = 'TOGGLE';

export const toggleAction = createAction(TOGGLE);

const createFilterFunction = comparison => (ticket) => {
  for (let i = 0; i < ticket.segments.length; i++) {
      if (!comparison(ticket.segments[i])) return false;
    }
    return true;
}

export const filterReducer = createReducer(
  {
    [toggleAction]: (state, id) => state.map(item => {
      if (item.id === id)
        item.active = !item.active;
      return item;
    }),
  },
  [
    {
      id: 'all',
      value: 'Все',
      active: true,
      check: () => true
    },
    {
      id: 'withoutStop',
      value: 'Без пересадок',
      active: false,
      check: createFilterFunction(segment => (segment.stops.length === 0))
    },
    {
      id: 'oneStop',
      value: '1 Пересадка',
      active: false,
      check: createFilterFunction(segment => (segment.stops.length === 1))
    },
    {
      id: 'twoStop',
      value: '2 Пересадки',
      active: false,
      check: createFilterFunction(segment => (segment.stops.length === 2))
    },
    {
      id: 'ThreeStop',
      value: '3 Пересадки',
      active: false,
      check: createFilterFunction(segment => (segment.stops.length === 3))
    },
  ]
)