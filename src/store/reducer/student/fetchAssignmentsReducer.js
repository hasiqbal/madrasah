// fetchAssignmentsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  assignments: [],
  loading: false,
  error: null,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    fetchAssignmentsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchAssignmentsSuccess: (state, action) => {
      state.loading = false;
      state.assignments = action.payload;
    },
    fetchAssignmentsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = assignmentsSlice;

export const fetchStudentAssignments = () => async (dispatch) => {
  const token = localStorage.getItem("token"); // Get the token from localStorage
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch(actions.fetchAssignmentsStart());

  try {
    const response = await axios.get(`/api/student/fetchassignments`, config); 
    dispatch(actions.fetchAssignmentsSuccess(response.data.studentAssignments));
    return response;
  } catch (error) {
    dispatch(actions.fetchAssignmentsFailure(error.message));
  }
};

export default assignmentsSlice.reducer;
