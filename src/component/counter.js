import React, { useReducer } from 'react';

const initialState = {
  count: 0
};

function reducer(state, action) {

  switch (action.type) {

    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return { count: 0 }
  }
};

const Counter =() =>  {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
     <div className="container-fluid">
      <p> Count :{state.count}</p>
        <button onClick={() => dispatch({ type: 'increment' })} > increment </button>
        <button onClick={() => dispatch({ type: 'decrement' })}> decrement </button>
      </div>
    </>
  );
};

export default Counter;
