import { combineReducers } from 'redux';

import { ticketsReducer } from './features/tickets/ducks';
import { filterReducer } from './features/filter/ducks'

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  filter: filterReducer,
});