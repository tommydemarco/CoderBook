import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./root-reducer";

//===> IMPORTING THE NECESSARY SAGA FUNCTION FROM REDUX SAGAS
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//===> CREATING AN INSTANCE OF THE SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

//===> RUNNING THE ROOT SAGA
sagaMiddleware.run(rootSaga);

export default store;
