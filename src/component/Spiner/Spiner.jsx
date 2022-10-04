import React from "react";
import "./spiner.css";
import { BeatLoader } from "react-spinners";
export default function LoadingSpinner() {
  return (
    <div className=" spinner-container w-full block ">
      <BeatLoader size={100} color="pink" />
    </div>
  );
}
