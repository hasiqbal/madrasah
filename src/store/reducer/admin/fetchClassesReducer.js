import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  classes: [],
  loading: false,
  error: null,
};

const classSlice = createSlice({
  name: "class",
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

export const { actions } = classSlice;

export const fetchClasses = () => async (dispatch) => {
  dispatch(actions.fetchClassesStart());

  try {
    const response = await axios.get(`/api/admin/fetchclasses`);
    dispatch(actions.fetchClassesSuccess(response.data.classes));
    return response;
  } catch (error) {
    dispatch(actions.fetchClassesFailure(error.message));
  }
};

export default classSlice.reducer;
