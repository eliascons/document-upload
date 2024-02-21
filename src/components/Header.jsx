import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useCallback } from "react";

// eslint-disable-next-line react/prop-types
const Header = ({ handleOpenModal }) => {
  const handleClose = useCallback(() => {
    handleOpenModal(false);
  }, [handleOpenModal]);
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        paddingLeft: "1rem",
        paddingTop: "1rem",
      }}
    >
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

const headerStyles = {
  display: "flex",
  justifyContent: "center",
  fontWeight: 600,
  fontSize: "2rem",
  fontFamily: "Roboto",
  color: "#243D6B",
  paddingBottom: "1rem",
  borderBottom: "solid 2px #f5eaea",
  width: "20rem",
};

const closeModalBtnStyles = {
  width: "2rem",
  textTransform: "none",
  borderRadius: "8px",
  height: "1.5rem",
  alignItems: "center",
  backgroundColor: "#243D6B",
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
