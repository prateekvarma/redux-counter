import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const payloadIncrementHandler = () => {
    dispatch({ type: 'INCREMENT_WITH_PAYLOAD', amount: 10 });
  }
  
  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'TOGGLE' })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div> 
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={payloadIncrementHandler}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
