import { useCallback, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Header from "./components/Header";
import Box from "@mui/material/Box";

const openModalBtnStyles = {
  textTransform: "none",
  borderRadius: "10px",
  backgroundColor: "#243D6B",
  width: "10rem",
};

const modalBodyStyles = {
  display: "flex",
  backgroundColor: "white",
  width: "100%",
  height: "100%",
  margin: "auto",
  borderRadius: "10px",
  flexDirection: "column",
};

const mainContainer = {};

const App = () => {
  const [showModal, setShowmodal] = useState(false);

  const handleOpenModal = useCallback(() => {
    setShowmodal(!showModal);
  }, [showModal]);
  return (
    <Box className="app">
      <Button
        variant="contained"
        color="primary"
        style={openModalBtnStyles}
        onClick={handleOpenModal}
      >
        Open Modal
      </Button>
      <Modal open={showModal} className="modal-content">
        <Box style={modalBodyStyles}>
          <Box style={mainContainer}>
            <Header handleOpenModal={setShowmodal} />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default App;
