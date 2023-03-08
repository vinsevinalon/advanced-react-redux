import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../features/Contact";
import appointmentReducer from "../features/Appointment";

export default configureStore({
  reducer: {
    Contacts: contactReducer,
    Appointments: appointmentReducer,
  },
});