import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  error: null,
  message: null,
  uploadedAssignment: null,
};

const uploadAssignmentSlice = createSlice({
  name: "uploadAssignment",
  initialState,
  reducers: {
    uploadAssignmentStart: (state) => {
      state.loading = true;
      state.error = null;
      state.message = null;
      state.uploadedAssignment = null;
    },
    uploadAssignmentSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.uploadedAssignment = action.payload.uploadedAssignment;
    },
    uploadAssignmentFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.uploadedAssignment = null;
    },
  },
});

export const { actions } = uploadAssignmentSlice;

export const uploadAssignment = (assignmentData) => async (dispatch) => {
  const token = localStorage.getItem("token"); // Get the token from localStorage
  const config = {
    headers: {
      Authorization: token,
    },
  };

  dispatch(actions.uploadAssignmentStart());

  try {
    const response = await axios.post(
      `/api/teacher/uploadassignment`,
      assignmentData,
      config
    );

    // Access the data property of the response object
    const responseData = response.data;
    dispatch(actions.uploadAssignmentSuccess(responseData));

    // Return the response object to be used in the .then block
    return response;
  } catch (error) {
    dispatch(actions.uploadAssignmentFailure(error.message));
  }
};

export default uploadAssignmentSlice.reducer;
