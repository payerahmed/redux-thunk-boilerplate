export function DataState(state = { data: {} }, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.data
      }

    default:
      return state
  }
}
