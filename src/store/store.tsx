import { createStore, combineReducers } from "redux";
import { AdminReducer } from "./reducers/admin-reducers";
import { ModalWindow } from "./reducers/modal_reducer";

let RootReducers = combineReducers({
  admin: AdminReducer,
  modal: ModalWindow,
});

type RootReduceType = typeof RootReducers;
export type storeType = ReturnType<RootReduceType>;

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionType<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesTypes<T>>;

export let store = createStore(RootReducers);
