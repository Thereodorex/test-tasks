import { createSelector } from 'reselect';

export const ticketsSelector = createSelector(
  [
    state => state.tickets,
    state => state.filter.filter(f => f.active)
  ],
  (tickets, filter) => {
    
    const checkItem = ticket => {
      for (let i = 0; i < filter.length; i++) {
        if (filter[i].check(ticket)) return true;
      }
      return false;
    }

    return tickets.filter(checkItem).slice(0, 5);
  }
)