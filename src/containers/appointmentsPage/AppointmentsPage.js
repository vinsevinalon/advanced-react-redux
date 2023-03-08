import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TileList } from "../../components/tileList/TileList";
import { addAppointments } from "../../redux/features/Appointment";

export const AppointmentsPage = () => {
  const appointmentArray = useSelector((state) => state.Appointments.array);
  const contactArray = useSelector((state) => state.Contacts.array);
  const [appointment, setAppointment] = useState({
    id: appointmentArray.length + 1,
    title: "",
    contactName: "",
    date: "",
    time: "",
  });
  const { title, contactName, date, time } = appointment;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = appointmentArray.findIndex((e) => e.title === title);
    if (index === -1) {
      dispatch(
        addAppointments({
          ...appointment,
          id: appointmentArray.length + 1,
        })
      );
      setAppointment({
        ...appointment,
        title: "",
        contactName: "",
        date: "",
        time: "",
      });
    }
  };

  const handleChange = (name) => (e) => {
    setAppointment({ ...appointment, [name]: e.target.value });
  };

  const nameExist = () => {
    const result = appointmentArray.filter(
      (item) =>
        item.title.toLocaleLowerCase() === title.trim().toLocaleLowerCase()
    );
    return result.length;
  };

  return (
    <div>
      <section>
        <div style={{ display: "flex" }}>
          <h2>Add Appointment</h2>
          {nameExist() ? (
            <h2 style={{ color: "red", marginLeft: "1rem" }}>
              Appointment already exist
            </h2>
          ) : (
            ""
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleChange("title")}
            placeholder="Appointment Title"
            required
            value={title}
          />
          <select required onChange={handleChange("contactName")}>
            <option value={contactName}>Unselected</option>
            {contactArray.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
          <input
            required
            onChange={handleChange("date")}
            type="date"
            value={date}
          />
          <input
            required
            onChange={handleChange("time")}
            type="time"
            value={time}
          />
          <button disabled={nameExist()}>Add Appointment</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList whichState="appointment" />
      </section>
    </div>
  );
};