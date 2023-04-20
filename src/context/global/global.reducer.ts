import {Action} from '@types/Action';
import {GlobalActions} from './global.actions';
import {GlobalContext} from './global.types';
import {User} from '@types/entities/User';

const globalInitialState: GlobalContext = {
  user: {} as User,
};

const globalReducer = (state: GlobalContext, action: Action<GlobalActions>) => {
  switch (action.type) {
    case GlobalActions.SetUser:
      const user = {
        ...action.payload,
      };

      return {...state, user: user};

    default:
      return state;
  }
};

export {globalReducer, globalInitialState};
