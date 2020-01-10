const initState = {
  all: true,
  transferNo: false,
  transferOne: false,
  transferTwo: false,
  transferThree: false,
  fast: false,
}

// [
//   {
//     id: 'all',
//     active: true,
//   }
// ]

export default function filter (state = initState, action) {
  switch (action.type) {
    case "TOGGLE":
      const result = {};
      result[action.payload] = !state[action.payload];
      console.log(Object.assign({}, state, result));
      return Object.assign({}, state, result);
    default:
      return state;
  }
}