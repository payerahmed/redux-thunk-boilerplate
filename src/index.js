import React from "react"
import ReactDOM from "react-dom"
import CountSmart from "./Count/CountSmart"
import DataSmart from "./Data/DataSmart"
import InputSmart from "./Input/InputSmart"

import { applyMiddleware, combineReducers, createStore } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import "./styles.css"

import { CountState } from "./Count/CountAction"
import { DataState } from "./Data/DataAction"
import { InputState } from "./Input/InputAction"

const CombinedReducer = combineReducers({
  CountState,
  DataState,
  InputState
})

let store = createStore(CombinedReducer, {}, applyMiddleware(thunk))

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CountSmart />
      <DataSmart />
      <InputSmart />
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
