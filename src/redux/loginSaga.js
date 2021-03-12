import { call, put, takeLatest } from "redux-saga/effects";
import { auth } from "../config/firebase";
import { loginPost, loginSaga } from "../pages/login/redux/login-redux";

async function loginAPI(data) {
    const { user } = await auth.createUserWithEmailAndPassword(data.email, data.password)
    return user;
}


function* loginRequestSaga(action) {
    try {
        const user = yield call(loginAPI, action.payload)
        yield put(loginPost(user))
        yield console.log(user)
    } catch (error) {
        yield console.log(error)
    }
}

export default function* watchLoginRequest() {
    yield takeLatest(loginSaga, loginRequestSaga)
}