import { createSelector } from 'reselect';

export const filterSelector = createSelector(
  [
    state => state.filter,
  ],
  filter => filter
)