const initState = [];

export default function tickets (state = initState, action) {
  switch (action.type) {
    case "JOIN":
      return [...state, ...action.payload].filter((v, i, a) => a.indexOf(v) === i);
    default:
      return state;
  }
}