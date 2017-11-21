import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogicMiddleware }        from 'redux-logic';
import { createLogger } from 'redux-logger';

import arrLogic                         from './Logics';
import rootReducers                from './Reducers/rootReducer.js';


const APIEndpoint = 'http://localhost:3000';
const logger = createLogger();

const logicMiddleware = createLogicMiddleware(arrLogic, { APIEndpoint });

const store = createStore(
    rootReducers,
    applyMiddleware(promise, thunk, logger, logicMiddleware)
);

export default store;