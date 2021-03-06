import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, middleware);
