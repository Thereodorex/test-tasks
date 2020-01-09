const initState = {
  all: true,
  transferNo: false,
  transferOne: false,
  transferTwo: false,
  transferThree: false,
  fast: false,
}

export default function filter (state = initState, action) {
  switch (action.type) {
    case "TOGGLE":
      const result = {};
      result[action.payload] = !state[action.payload];
      return Object.assign({}, state, result);
    default:
      return state;
  }
}