import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  latestAssignment: {},
  loading: false,
  error: null,
};

const latestAssignmentSlice = createSlice({
  name: "latestAssignment",
  initialState,
  reducers: {
    fetchLatestAssignmentStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchLatestAssignmentSuccess: (state, action) => {
      state.loading = false;
      state.latestAssignment = action.payload;
    },
    fetchLatestAssignmentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = latestAssignmentSlice;

export const fetchLatestAssignment = () => async (dispatch) => {
  const token = localStorage.getItem("token"); // Get the token from localStorage
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch(actions.fetchLatestAssignmentStart());

  try {
    const response = await axios.get(`/api/teacher/fetchlatestassignment`, config);
    dispatch(actions.fetchLatestAssignmentSuccess(response.data.latestAssignment));
    return response;
  } catch (error) {
    dispatch(actions.fetchLatestAssignmentFailure(error.message));
  }
};

export default latestAssignmentSlice.reducer;
