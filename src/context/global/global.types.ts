import {User} from '@types/entities/User';

export interface GlobalContext {
  user: User;
}

export interface GlobalContextActions {
  setUser: (user: User) => void;
}
