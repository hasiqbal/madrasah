// statsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  stats: {},
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

export const fetchStats = () => async (dispatch) => {
  dispatch(actions.fetchStatsStart());

  try {
    const response = await axios.get(`/api/admin/fetchstats`);
    dispatch(actions.fetchStatsSuccess(response.data));
    return response;
  } catch (error) {
    dispatch(actions.fetchStatsFailure(error.message));
  }
};

export default statsSlice.reducer;
