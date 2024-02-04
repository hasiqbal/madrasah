// fetchStatsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  stats: {
    totalStudentAssignments: 0,
    dueStudentAssignments: 0,
    pendingStudentAssignments: 0,
    submittedStudentAssignments: 0,
    totalAlerts: 0,
  },
  loading: false,
  error: null,
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    fetchStatsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchStatsSuccess: (state, action) => {
      state.loading = false;
      state.stats = action.payload;
    },
    fetchStatsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = statsSlice;

export const fetchStudentStats = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch(actions.fetchStatsStart());

  try {
    const response = await axios.get(`/api/student/fetchuserstats`, config);
    dispatch(actions.fetchStatsSuccess(response.data));
    return response;
  } catch (error) {
    dispatch(actions.fetchStatsFailure(error.message));
  }
};

export default statsSlice.reducer;
