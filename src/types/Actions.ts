import { Dispatch } from "react";
import { Action } from "./Action";

export type ActionFn<T> = (
  dispatch: Dispatch<Action<T>>
) => (...args: any[]) => void;

export type Actions<T> = {
  [key: string]: ActionFn<T>;
};
