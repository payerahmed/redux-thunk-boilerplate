export function ExpressState (state = { link: '' }, action) {
  switch (action.type) {
    case 'FETCH_LINK':
      return {
        ...state,
        link: action.link
      }

    default:
      return state
  }
}
