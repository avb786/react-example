import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
import classes from './Counter.module.css';
const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    console.log(state);
    return state.counter
  })
  const incHandler = (number) => {

    console.log(counter);
    dispatch(counterActions.increment(number))
  }
  const decHandler = () => {
    dispatch(counterActions.decrement())

  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counter.showCounter && <div className={classes.value}>{counter.counter}</div>}
      <div>
        <button onClick={() => incHandler(1)} > + </button>
        <button onClick={() => incHandler(5)} > 5+ </button>
        <button onClick={decHandler} > - </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
