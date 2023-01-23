import { useReducer } from "react";
// Initial State
const initialState = { count: 0 };
// Define Action Type
type ACTIONTYPE = { type: "increment" };
// reducer
function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}
// Counter Component
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <center>
        <h2>Count: {state.count}</h2>
        <br></br>
        <br></br>
        <button
          className="button rounded-pill"
          onClick={() => dispatch({ type: "increment" })}
        >
          +
        </button>
      </center>
    </>
  );
}
export default Counter;
