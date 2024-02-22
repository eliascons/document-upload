import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import colors from "../theme/colors";

import { useCallback } from "react";

const Header = ({ handleOpenModal }) => {
  const handleClose = useCallback(() => {
    handleOpenModal(false);
  }, [handleOpenModal]);
  return (
    <Box sx={mainContainer}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClose}
        sx={closeModalBtnStyles}
      >
        <CloseIcon />
      </Button>
      <Box sx={innerBoxStyles}>
        <Box sx={headerStyles}>Document Upload</Box>
      </Box>
    </Box>
  );
};

const mainContainer = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  paddingLeft: "1rem",
  paddingTop: ".5rem",
};

const headerStyles = {
  display: "flex",
  justifyContent: "center",
  fontWeight: 600,
  fontSize: "2rem",
  fontFamily: "Roboto",
  color: colors.blue,
  paddingBottom: "1rem",
  borderBottom: `solid 2px ${colors.ligthGrey}`,
  width: "20rem",
};

const closeModalBtnStyles = {
  width: "2rem",
  textTransform: "none",
  borderRadius: "8px",
  height: "1.5rem",
  alignItems: "center",
  backgroundColor: colors.blue,
  justifyContent: "center",
  minWidth: "2rem",
  padding: "1rem",
};

const innerBoxStyles = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};
export default Header;
