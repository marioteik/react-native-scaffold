import createSectionContext from '../createSectionContext';
import {createContextHook} from '../createContextHook';
import {globalInitialState, globalReducer} from './global.reducer';
import {GlobalActions, globalContextActions} from './global.actions';
import {GlobalContext, GlobalContextActions} from './global.types';

const {Context, ContextActions, Provider} = createSectionContext<
  GlobalContext,
  GlobalContextActions,
  GlobalActions
>(globalReducer, globalContextActions, globalInitialState);

const useGlobalContext = createContextHook<GlobalContext>(
  'GlobalContext',
  Context,
);

const useGlobalContextActions = createContextHook<GlobalContextActions>(
  'GlobalContextActions',
  ContextActions,
);

export {
  Context as GlobalContext,
  ContextActions as GlobalContextActions,
  Provider as GlobalProvider,
  useGlobalContext,
  useGlobalContextActions,
};
