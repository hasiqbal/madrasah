// approveUserReducer.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
};

const approveUserSlice = createSlice({
  name: "approveUser",
  initialState,
  reducers: {
    approveUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    approveUserSuccess: (state) => {
      state.loading = false;
      // You can handle success actions specific to approving users here if needed
    },
    approveUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = approveUserSlice;

export const approveUser = (email) => async (dispatch) => {
  dispatch(actions.approveUserStart());

  try {
    const response = await axios.post(`/api/admin/approveuser`, { email });
    dispatch(actions.approveUserSuccess(response.data));
    console.log(response);
  } catch (error) {
    dispatch(actions.approveUserFailure(error.message));
  }
};

export default approveUserSlice.reducer;
