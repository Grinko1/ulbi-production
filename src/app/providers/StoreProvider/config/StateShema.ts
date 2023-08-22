import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { CounterShema } from "entities/Counter";
import { ProfileShema } from "entities/Profile";
import { UserShema } from "entities/User";
import { LoginShema } from "features/AuthByUsername";


export interface StateShema {
    counter: CounterShema,
    user: UserShema,

    //async reducers
    login?: LoginShema
    profile?:ProfileShema
}

export type StateShemaKey = keyof StateShema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateShema>;
  reduce: (state: StateShema, action: AnyAction) => CombinedState<StateShema>;
  add: (key: StateShemaKey, reducer: Reducer) => void;
  remove: (key: StateShemaKey) => void;
}


export interface ReduxStoreWithManager extends EnhancedStore<StateShema> {
    reducerManager: ReducerManager
}
