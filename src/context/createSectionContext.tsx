import React, { FC, useReducer, createContext, useMemo, ReactNode } from "react";
import { Action } from "../types/Action";
import { Actions } from "../types/Actions";

const createSectionContext = <S, A, E>(
  reducer: (state: S, action: Action<E>) => S,
  actions: Actions<E>,
  initialState: S
) => {
  const Context = createContext<S>(initialState);
  const ContextActions = createContext<A>({} as A);

  const Provider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    let boundActions = useMemo(
      () => Object.fromEntries(Object.entries(actions).map(([k, v], i) => [k, v(dispatch)])),
      []
    );

    return (
      <ContextActions.Provider value={{ ...boundActions } as any}>
        <Context.Provider value={{ ...state }}>{children}</Context.Provider>
      </ContextActions.Provider>
    );
  };

  return { Context, ContextActions, Provider };
};

export default createSectionContext;
