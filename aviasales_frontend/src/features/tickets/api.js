export const api = {
  getSearchId: () => 'https://front-test.beta.aviasales.ru/search',
  getTickets: (searchId) => `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`,
}