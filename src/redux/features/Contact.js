import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    array: [],
  },
  reducers: {
    addContact: (state, action) => {
      const index = state.array.findIndex((e) => e.id === action.payload.id);
      index === -1
        ? state.array.push(action.payload)
        : (state.array[index] = action.payload);
    },
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;