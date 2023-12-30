import React, { useReducer, useState } from 'react';

const reducerFun = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todo: [...state.todo, action.payload] };
    default:
      return state;
  }
};

const initialState = {
  todo: [],
};

const Reducer2 = () => {
  const [list, setList] = useState('');
  const [currentState, dispatch] = useReducer(reducerFun, initialState);

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const handleClick = () => {
    dispatch({
      type: 'ADD_TODO',
      payload: list,
    });
  };

  return (
    <div>
      <input type="text" value={list} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
      {currentState.todo.map((elem) => (
        <div key={elem}>{elem}</div>
      ))}
    </div>
  );
};

export default Reducer2;
