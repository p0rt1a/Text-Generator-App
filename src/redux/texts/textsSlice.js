import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const config = {
  headers: {
    "X-Api-Key": `${process.env.REACT_APP_API_KEY}`,
  },
};

export const fetchText = createAsyncThunk(
  "texts/fetchText",
  async (paragraph) => {
    let data = "";

    await axios
      .get(
        `${process.env.REACT_APP_BASE_ENDPOINT}?paragraphs=${paragraph}`,
        config
      )
      .then((res) => (data = res.data.text))
      .catch((error) => console.log(error));

    return data;
  }
);

export const textsSlice = createSlice({
  name: "texts",
  initialState: {
    text: "",
    isLoading: false,
  },
  reducers: {},
  extraReducers: {
    [fetchText.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchText.fulfilled]: (state, action) => {
      state.text = action.payload;
      state.isLoading = false;
    },
  },
});

export default textsSlice.reducer;
