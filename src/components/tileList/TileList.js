import React from "react";
import { useSelector } from "react-redux";
import { Tile } from "../tile/Tile";

export const TileList = ({ whichState }) => {
  const contactArray = useSelector((state) => state.Contacts);
  const appointmentArray = useSelector((state) => state.Appointments);

  const returnWhichState = () =>
    whichState === "contacts" ? contactArray.array : appointmentArray.array;

  return (
    <div className="">
      <Tile state={returnWhichState()} name={whichState} />
    </div>
  );
};