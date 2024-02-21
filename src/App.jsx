import { useCallback, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import FileDropArea from "./components/FileDropArea";
import RadioField from "./components/RadioField";
import colors from "./theme/colors";
import ValueField from "./components/ValueField";

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
          <Box sx={{ overflow: "auto" }}>
            <Header handleOpenModal={setShowmodal} />
            <Box sx={modalContainer}>
              <Box sx={leftPannelContainer}>
                <FileDropArea />
                <ValueField
                  title={"Elapse Data Checking:"}
                  description={"No Elapsed Dates"}
                />
              </Box>

              <Box style={rigthPannelContainer}>
                <RadioField
                  question={"Split schedule using social distance?"}
                  option1={"Yes"}
                  option2={"No"}
                />
                <ValueField
                  title={"Location Checking:"}
                  description={"All available!"}
                />

                <RadioField
                  question={"Client:"}
                  option1={"Single"}
                  option2={"Multiple"}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

const openModalBtnStyles = {
  textTransform: "none",
  borderRadius: "10px",
  backgroundColor: colors.blue,
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

const modalContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  margin: "2rem",
};

const rigthPannelContainer = {
  flexDirection: "column",
};

const leftPannelContainer = {};
export default App;
