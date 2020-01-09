import { combineReducers } from 'redux';

import filterReducer from './filter';
import ticketReducer from './filter';

export const rootReducer = combineReducers({
  tickets: ticketReducer,
  filter: filterReducer
});