import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';
const NotFound = ({name}) => {
  return (
    <div className="PageNotFound">
      <ErrorIcon />

      <Typography>{name} Not Found </Typography>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
