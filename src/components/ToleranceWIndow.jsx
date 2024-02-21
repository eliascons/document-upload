import { Box } from "@mui/material";
import { useState } from "react";
import colors from "../theme/colors";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ToleranceWIndow = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <Box sx={{}}>
      <Box
        sx={{
          paddingBottom: "1rem",
          color: colors.blue,
          fontWeight: "600",
          fontFamily: "Roboto",
        }}
      >
        Tolerance Window
      </Box>
      <Box sx={{ display: "flex", maxHeight: "1.2rem" }}>
        <Box
          onClick={handleChange}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "2.1rem",
            background: colors.blue,
            borderRadius: ".7rem",
            padding: "2px",
            alignItems: checked ? "flex-end" : "flex-start",
            borderColor: colors.blue,
          }}
        >
          <Box
            style={{
              width: "1rem",
              height: "1rem",
              backgroundColor: colors.white,
              borderRadius: "50%",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            color: colors.blue,
            fontWeight: "400",
            fontFamily: "Roboto",
            fontSize: ".8rem",
            borderRight: `2px solid ${colors.blue}`,
            paddingRight: "1rem",
            paddingLeft: "1rem",
          }}
        >
          {checked ? "Toggle ON" : "Toggle OFF"}
        </Box>
        <AccessTimeIcon sx={iconStyles} />
        <Box
          sx={{
            color: colors.blue,
            fontWeight: "400",
            fontFamily: "Roboto",
            fontSize: ".8rem",
          }}
        >
          Select tolerance level
        </Box>
      </Box>
    </Box>
  );
};

const iconStyles = {
  transform: "rotate(140deg)",
  paddingRight: "1rem",
  paddingTop: "1rem",
  fontSize: "1.5rem",
  color: colors.blue,
};

export default ToleranceWIndow;
