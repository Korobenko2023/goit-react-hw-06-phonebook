import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);