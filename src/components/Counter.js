import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {

    dispatch({type: 'increment'});

  };

  const decrementHandler = () => {
    dispatch({type:'decrement'})
  };
  const incrementbyHandler = () => {

    dispatch({type: 'increment5'});

  };

  const decrementbyHandler = () => {
    dispatch({type:'decrement5'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementbyHandler}>IncrementBy5</button>
        <button onClick={decrementbyHandler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
