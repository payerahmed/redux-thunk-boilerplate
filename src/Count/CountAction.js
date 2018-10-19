export let CountAction = x => {
  return {
    type: "INCREASE",
    count: x
  }
}

export function CountState(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: action.count + 1
      }
    default:
      return state
  }
}
