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
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={handleClose}
        sx={closeModalBtnStyles}
        startIcon={<CloseIcon />}
      />
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
  margin: "1rem 0 .5rem 2rem",
  padding: "0",
  flexDirection: "column",
  alignItems: "flex-end",
  backgroundColor: "#243D6B",
  minWidth: "2rem",
};

const innerBoxStyles = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};
export default Header;
