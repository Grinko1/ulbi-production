import { counterActions, counterReducer } from './CounterSlice';
import { CounterShema } from '../types/counterShema';

describe('CounterSlice.test description', () => {
  test('should decrement', () => {
    const state: CounterShema = {
      value: 10 
    };
    expect(counterReducer(state as CounterShema, counterActions.decrement())).toEqual({value:9});
  });
});
describe('CounterSlice.test description', () => {
  test('should increment', () => {
    const state: CounterShema = {
      value: 10 
    };
    expect(counterReducer(state as CounterShema, counterActions.increment())).toEqual({value:11});
  });
});

describe('CounterSlice.test description', () => {
  test('should work with empty state', () => {

    expect(counterReducer(undefined, counterActions.increment())).toEqual({value:1});
  });
});
