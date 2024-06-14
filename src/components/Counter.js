import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/Store';

const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {

    dispatch(counterActions.increment());

  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };
  const incrementbyHandler = () => {

    dispatch(counterActions.increase(5));

  };

  const decrementbyHandler = () => {
    dispatch({type:'decrease', amount:5})
  };
  
   
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { show && <div className={classes.value}>{counter}</div>}
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
