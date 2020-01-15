import { createAction, createReducer } from 'redux-act'; 

export const JOIN = 'JOIN';
export const UPDATE = 'UPDATE';
export const SORT_BY_PRICE = 'SORT_BY_PRICE';
export const SORT_BY_TIME = 'SORT_BY_TIME';

export const joinAction = createAction(JOIN);
export const updateAction = createAction(UPDATE);
export const sortByTimeAction = createAction(SORT_BY_TIME);
export const sortByPriceAction = createAction(SORT_BY_PRICE);
export const sortDefaultAction = sortByPriceAction;

let i = 0;
export const ticketsReducer = createReducer(
  {
    [joinAction]: (state, tickets) => [...state, ...tickets].map(item => Object.assign(item, {id: i++})),
    [sortByPriceAction]: (state) => {
      const res = [...state];
      res.sort((a, b) => a.price > b.price ? 1 : -1);
      return res;
    },
    [sortByTimeAction]: (state) => {
      const res = [...state];
      const reducer = (accum, segment) => accum + segment.duration;
      const reduce = ticket => ticket.segments.reduce(reducer, 0);
      res.sort((a, b) => reduce(a) > reduce(b) ? 1 : -1);
      return res;
    },
  },
  []
);