export let fetchData = (count, inputString) => async dispatch => {
  let res = await fetch(`${inputString}${count}`)
  let data = await res.json()
  dispatch({
    type: "FETCH_DATA",
    data
  })
}
