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
    addClassStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addClassSuccess: (state, action) => {
      state.loading = false;
      state.classes.push(action.payload);
    },
    addClassFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = classSlice;

export const addClass = (formData) => async (dispatch) => {
  dispatch(actions.addClassStart());

  try {
    const response = await axios.post(`/api/admin/addclass`, formData);
    dispatch(actions.addClassSuccess(response.data));
    console.log(response);
  } catch (error) {
    dispatch(actions.addClassFailure(error.message));
  }
};

export default classSlice.reducer;
