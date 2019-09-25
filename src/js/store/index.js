import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";

import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

// const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const enhancer = composeEnhancers(
    applyMiddleware( initialiseSagaMiddleware),

    // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);



initialiseSagaMiddleware.run(rootSaga);

export default store;
