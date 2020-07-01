import React from "react";
import { Paper } from "./Paper";
import { Scissors } from "./Scissors";
import { makeStyles } from "@material-ui/core";

export const Pentagon = ({ children, className }) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 329 313">
        <path
          fill="none"
          stroke="#000"
          strokeWidth="15"
          d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z"
          opacity=".2"
        />
      </svg>
      {children}
    </div>
  );
};