import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TileList } from "../../components/tileList/TileList";
import { addContact } from "../../redux/features/Contact";

export const ContactsPage = () => {
  const contactArray = useSelector((state) => state.Contacts.array);
  const [contact, setContact] = useState({
    id: contactArray.length,
    name: "",
    number: "",
    email: "",
  });
  const { name, number, email } = contact;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = contactArray.findIndex((e) => e.name === name);
    if (index === -1) {
      dispatch(addContact({ ...contact, id: contactArray.length + 1 }));
      setContact({ ...contact, name: "", number: "", email: "" });
    }
  };

  const handleChange = (name) => (e) => {
    setContact({ ...contact, [name]: e.target.value });
  };

  const nameExist = () => {
    const result = contactArray.filter(
      (item) =>
        item.name.toLocaleLowerCase() === name.trim().toLocaleLowerCase()
    );
    return result.length;
  };

  return (
    <div>
      <section>
        <div style={{ display: "flex" }}>
          <h2 style={{ display: "flex" }}>Add Contact</h2>
          {!nameExist() ? (
            ""
          ) : (
            <h2
              style={{
                color: "red",
                marginLeft: "1rem",
              }}
            >
              Name already exists
            </h2>
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange("name")}
            required
            type="text"
            name="name"
            placeholder="Contact Name"
            value={name}
          />
          <input
            onChange={handleChange("number")}
            required
            name="phone"
            type="tel"
            placeholder="Contact Number"
            // pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            value={number}
          />
          <input
            required
            name="email"
            onChange={handleChange("email")}
            placeholder="Contact Email"
            value={email}
            type="email"
          />
          <button disabled={nameExist()}>Add Contact</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList whichState="contacts" />
      </section>
    </div>
  );
};