import { combineReducers } from "@reduxjs/toolkit";
import LoginReducer from '../pages/login/redux/login-redux'


const reducer = combineReducers({
    login: LoginReducer
})

export default reducer