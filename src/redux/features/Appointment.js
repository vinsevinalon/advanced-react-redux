import { createSlice } from "@reduxjs/toolkit";

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    array: [],
  },
  reducers: {
    addAppointments: (state, action) => {
      const index = state.array.findIndex((e) => e.id === action.payload.id);
      index === -1
        ? state.array.push(action.payload)
        : (state.array[index] = action.payload);
    },
  },
});

export const { addAppointments } = appointmentSlice.actions;

export default appointmentSlice.reducer;