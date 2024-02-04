import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  classes: [],
  loading: false,
  error: null,
};

const classesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    fetchClassesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchClassesSuccess: (state, action) => {
      state.loading = false;
      state.classes = action.payload;
    },
    fetchClassesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = classesSlice;

export const fetchClasses = () => async (dispatch) => {
  const token = localStorage.getItem("token"); // Get the token from localStorage
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch(actions.fetchClassesStart());

  try {
    const response = await axios.get(`/api/teacher/fetchclasses`, config);
    dispatch(actions.fetchClassesSuccess(response.data.classes));
    return response;
  } catch (error) {
    dispatch(actions.fetchClassesFailure(error.message));
  }
};

export default classesSlice.reducer;
