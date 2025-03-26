import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  columns: [],
  fileName: null,
};

export const DataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setCsvData: (state, action) => {
      state.data = action.payload.data;
      state.fileName = action.payload.fileName;
      if (action.payload.data.length > 0) {
        state.columns = Object.keys(action.payload.data[0]);
      }
    },
  },
});
export const { setCsvData } = DataSlice.actions;
export default DataSlice.reducer;
