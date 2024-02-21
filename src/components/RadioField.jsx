import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import colors from "../theme/colors";

import { useState } from "react";

const RadioField = ({ option1, option2, question }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Box sx={mainContainer}>
      <Box sx={questionContainer}>{question}</Box>
      <RadioGroup
        row
        value={selectedValue}
        onChange={handleChange}
        sx={radioGroupStyles}
      >
        <Radio value={option1}></Radio>
        {option1}
        <Radio value={option2}></Radio>
        {option2}
      </RadioGroup>
    </Box>
  );
};
const mainContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};
const questionContainer = {
  fontSize: 16,
  color: colors.blue,
  fontWeight: "600",
  fontFamily: "Roboto",
};

const radioGroupStyles = {
  display: "flex",
  alignItems: "center",
  marginLeft: "-.5rem",
  color: colors.blue,
  fontWeight: "600",
  fontSize: ".8rem",
  fontFamily: "Roboto",
  paddingTop: "1rem",
};

export default RadioField;
