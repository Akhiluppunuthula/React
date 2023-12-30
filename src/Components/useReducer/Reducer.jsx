import  { useReducer } from "react";

const Reducer = () => {
  const initialState = {
    count: 0,
    greetings: "Hello",
  };

  const reduceFun = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + action.payload };
      case "INCREMENT_FIVE":
        return { ...state, count: state.count + 5 };
      default:
        return state;
    }
  };

  const [currentState, dispatch] = useReducer(reduceFun, initialState);

  const handleClick = () => {
    dispatch({
      type: "INCREMENT",
      payload: 1,
    });
  };

  return (
    <div>
      <h1>{currentState.count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Reducer;
