import {
  ReduxStoreWithManager,
  StateShemaKey,
} from 'app/providers/StoreProvider/config/StateShema';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Reducer } from 'redux';
import { keys } from 'regenerator-runtime';

export type ReducersList = {
  [name in StateShemaKey]?: Reducer;
};
interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}
type ReducerListEntry = [StateShemaKey, Reducer];

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducerListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducerListEntry) => {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
        });

      }
    };
  }, []);
  return <>{children}</>;
};
