export let InputAction = x => {
  return {
    type: "SET_INPUT_DATA",
    inputData: x
  }
}

export function InputState(state = { count: 0 }, action) {
  switch (action.type) {
    case "SET_INPUT_DATA":
      return {
        ...state,
        inputData: action.inputData
      }
    default:
      return state
  }
}
