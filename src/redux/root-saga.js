import {all} from 'redux-saga/effects'
import watchLoginRequest from './loginSaga'

export default function* rootSage(){
    yield all([
        watchLoginRequest()
    ])
}