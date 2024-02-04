import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: null,
  isTeacher: false,
  isHifzStudent: false,
  loading: false,
  error: null,
};

const userLoginSlice = createSlice({
  name: "userLogin",
  initialState,
  reducers: {
    userLoginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    userLoginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.isTeacher = action.payload.isTeacher;
      state.isHifzStudent = action.payload.isHifzStudent;
    },
    userLoginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = userLoginSlice;

export const userLogin = (formData) => async (dispatch) => {
  dispatch(actions.userLoginStart());

  try {
    const response = await axios.post(`/api/user/userlogin`, formData);
    const responseData = response.data;
    dispatch(actions.userLoginSuccess(responseData));

    return response;
  } catch (error) {
    dispatch(actions.userLoginFailure(error.message));
  }
};

export default userLoginSlice.reducer;
