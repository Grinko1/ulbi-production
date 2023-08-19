import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { counterActions } from '../model/slice/CounterSlice';
import { StateShema } from 'app/providers/StoreProvider/config/StateShema';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div className={classNames('', {}, [className])}>
      <h1 data-testid='value-title'>value = {counterValue}</h1>
      <button  data-testid='increment-btn' onClick={increment}>increment</button>
      <button data-testid='decrement-btn' onClick={decrement}>decrement</button>
    </div>
  );
};
