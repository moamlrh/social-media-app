import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createMiddleWareSaga from 'redux-saga'
import reducer from './reducer'
import rootSaga from './root-saga'

const sagaMiddleware = createMiddleWareSaga()
const middleware = [
    ...getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: false
    }),
    sagaMiddleware
];

const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== "production"
})

sagaMiddleware.run(rootSaga)
export default store