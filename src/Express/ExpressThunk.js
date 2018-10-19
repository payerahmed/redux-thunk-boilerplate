export let fetchLink = () => async dispatch => {
  let res = await window.fetch('http://localhost:4000/link')
  let link = await res.text()

  dispatch({
    type: 'FETCH_LINK',
    link
  })
}
