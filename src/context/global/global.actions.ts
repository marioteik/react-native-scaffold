import {Dispatch} from 'react';
import {Action} from '@types/Action';
import {User} from '@types/entities/User';

enum GlobalActions {
  SetUser,
}

const setUser = (dispatch: Dispatch<Action<GlobalActions>>) => {
  return (payload: User) => {
    dispatch({type: GlobalActions.SetUser, payload});
  };
};

const globalContextActions = {
  setUser,
};

export {GlobalActions, globalContextActions};
