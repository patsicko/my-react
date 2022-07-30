import React from "react";
import { useReducer } from "react";

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Reduced() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count} <br/><br/>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button> &nbsp;&nbsp;
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
export default Reduced;