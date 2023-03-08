import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import "./App.css";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  return (
    <>
      <h1>Appointment Planner</h1>
      <nav>
        <NavLink to={"/contacts"} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={"/appointments"} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={"/contacts"} />
          </Route>
          <Route path={"/contacts"}>
            <ContactsPage />
          </Route>
          <Route path={"/appointments"}>
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;