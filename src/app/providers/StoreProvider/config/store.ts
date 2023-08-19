import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateShema } from './StateShema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

export function createReduxStore(initialState: StateShema) {
  const rootReducer: ReducersMapObject<StateShema> =  {
      counter: counterReducer,
      user: userReducer
    }
  return configureStore<StateShema>({
    reducer:rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
