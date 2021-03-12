import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const loginSlice = createSlice({
  name: "login-slice",
  initialState: initialState,
  reducers: {
    loginSaga(state, action) {},
    loginPost(state, action) {
      console.log('=========== actions ===========')
      console.log(action)
    },
  },
});

export const { loginError, loginPost, loginSaga } = loginSlice.actions;
export default loginSlice.reducer;
