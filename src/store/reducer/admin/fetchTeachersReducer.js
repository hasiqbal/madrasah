// fetchTeachersSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  teachers: [],
  loading: false,
  error: null,
};

const fetchTeachersSlice = createSlice({
  name: "fetchTeachers",
  initialState,
  reducers: {
    fetchTeachersStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTeachersSuccess: (state, action) => {
      state.loading = false;
      state.teachers = action.payload;
    },
    fetchTeachersFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = fetchTeachersSlice;

export const fetchTeachers = () => async (dispatch) => {
  dispatch(actions.fetchTeachersStart());

  try {
    const response = await axios.get(`/api/admin/fetchteachers`);
    dispatch(actions.fetchTeachersSuccess(response.data.teachers));
    return response;
  } catch (error) {
    dispatch(actions.fetchTeachersFailure(error.message));
  }
};

export default fetchTeachersSlice.reducer;
