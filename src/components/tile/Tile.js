import React from "react";

export const Tile = ({ state, name }) => {
  return (
    <div>
      {name === "contacts"
        ? state?.map(({ id, name, number, email }) => (
            <div className="tile-container" key={id}>
              <p>Name: {name}</p>
              <p>Number: {number}</p>
              <p>Email: {email}</p>
            </div>
          ))
        : state?.map(({ id, title, contactName, date, time }) => (
            <div className="tile-container" key={id}>
              <h3>{title}</h3>
              <p>{contactName}</p>
              <p>{date}</p>
              <p>{time}</p>
            </div>
          ))}
    </div>
  );
};