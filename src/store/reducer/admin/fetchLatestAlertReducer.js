import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  latestAlert: null,
  loading: false,
  error: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    fetchAlertStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAlertSuccess: (state, action) => {
      state.loading = false;
      state.latestAlert = action.payload;
    },
    fetchAlertFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = alertSlice;

export const fetchLatestAlert = () => async (dispatch) => {
  dispatch(actions.fetchAlertStart());

  try {
    const response = await axios.get(`/api/admin/fetchlatestalert`);
    dispatch(actions.fetchAlertSuccess(response.data.latestAlert));
    return response;
  } catch (error) {
    dispatch(actions.fetchAlertFailure(error.message));
  }
};

export default alertSlice.reducer;
