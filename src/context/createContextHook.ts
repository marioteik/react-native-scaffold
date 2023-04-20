import { Context, useContext } from "react";

export const createContextHook = <T>(
  contextName: string,
  context: Context<T>
) => {
  return () => {
    const ctx = useContext<T>(context);

    if (ctx === undefined) {
      throw new Error(
        `use${contextName} must be used withing a ${contextName}Provider.`
      );
    }

    return ctx;
  };
};
