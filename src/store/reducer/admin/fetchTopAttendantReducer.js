import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  topAttendees: [],
  loading: false,
  error: null,
};

const fetchTopAttendantsSlice = createSlice({
  name: "topAttendees",
  initialState,
  reducers: {
    fetchTopAttendeesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchTopAttendeesSuccess: (state, action) => {
      state.loading = false;
      state.topAttendees = action.payload;
    },
    fetchTopAttendeesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { actions } = fetchTopAttendantsSlice;

export const fetchTopAttendees = () => async (dispatch) => {
  dispatch(actions.fetchTopAttendeesStart());

  try {
    const response = await axios.get(`/api/admin/fetchTopAttendant`);
    dispatch(actions.fetchTopAttendeesSuccess(response.data.topAttendees));
    return response;
  } catch (error) {
    dispatch(actions.fetchTopAttendeesFailure(error.message));
  }
};

export default fetchTopAttendantsSlice.reducer;
