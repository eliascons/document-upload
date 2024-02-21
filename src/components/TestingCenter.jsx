import { Box } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Select, MenuItem } from "@mui/material";
import { useState } from "react";
import colors from "../theme/colors";

const TestingCenter = ({ title }) => {
  const [selectedValue, setSelectedValue] = useState("Select Client");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={mainContainer}>
      <Box sx={titleStyles}>{title}</Box>
      <Select value={selectedValue} onChange={handleChange} sx={dropDownStyles}>
        <MenuItem value="Select Client">Select Client</MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
      <AccessTimeIcon sx={iconStyles} />
    </Box>
  );
};

const mainContainer = {
  display: "flex",
  alignItems: "center",
  paddingTop: "1.5rem",
};

const dropDownStyles = {
  border: `1px solid ${colors.darkGrey}`,
  borderRadius: "16px",
  marginBottom: "1rem",
  width: "100%",
  maxWidth: "10rem",
  height: "2.8rem",
  color: colors.blue,
};

const titleStyles = {
  paddingBottom: "2rem",
  paddingRight: "1rem",
  fontFamily: "Roboto",
  color: colors.blue,
  fontSize: "1rem",
  fontWeight: "500",
};

const iconStyles = {
  transform: "rotate(140deg)",
  paddingRight: "1rem",
  paddingTop: "1rem",
  fontSize: "2rem",
  color: colors.blue,
};

export default TestingCenter;
