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
import TestingCenter from "./components/TestingCenter";
import ToleranceWIndow from "./components/ToleranceWIndow";
import CloseIcon from "@mui/icons-material/Close";

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
        <Box sx={{ overflow: "auto", height: "100%" }}>
          <Box style={modalBodyStyles}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpenModal}
              sx={closeModalBtnStyles}
            >
              <CloseIcon />
            </Button>
            <Box sx={{ overflow: "auto", maxWidth: "100rem" }}>
              <Header handleOpenModal={setShowmodal} />
              <Box sx={modalContainer}>
                <Box sx={leftPannelContainer}>
                  <FileDropArea />
                  <ValueField
                    title={"Elapse Data Checking:"}
                    description={"No Elapsed Dates"}
                  />
                  <ToleranceWIndow />
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
                  <TestingCenter title={"Testing Center 1"} />
                  <TestingCenter title={"Testing Center 2"} />
                  <TestingCenter title={"Testing Center 3"} />
                  <TestingCenter title={"Testing Center 4"} />
                </Box>
              </Box>
              <Box sx={bottomText}>
                Data in the import file is correct. Please press Continue to
                import.
              </Box>
              <Box sx={btnsContainer}>
                <Button sx={importBtnStyles}>Continue to import</Button>
                <Button sx={cancelBtn}>Cancel</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

const cancelBtn = {
  textTransform: "none",
  borderRadius: "10px",
  backgroundColor: colors.white,
  color: colors.yellow,
  border: `solid 2px ${colors.yellow}`,
  width: "15%",
  height: "3rem",
  margin: ".8rem",
  padding: "1rem",
  "&:hover": {
    backgroundColor: colors.ligthGrey,
    boxShadow: "none",
    "&::before, &::after": {
      borderRadius: "none",
    },
  },
};

const btnsContainer = {
  display: "flex",
  justifyContent: "center",
};

const bottomText = {
  display: "flex",
  justifyContent: "center",
  fontFamily: "Roboto",
  color: colors.blue,
  fontSize: "1.2rem",
  fontWeight: "800",
};

const importBtnStyles = {
  textTransform: "none",
  borderRadius: "10px",
  backgroundColor: colors.blue,
  width: "15%",
  color: "white",
  height: "3rem",
  margin: ".8rem",
  padding: "1rem",
  "&:hover": {
    backgroundColor: colors.blue,
    boxShadow: "none",
    "&::before, &::after": {
      borderRadius: "none",
    },
  },
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
  borderRadius: "10px",
  flexDirection: "column",
  maxWidth: "90%",
  justifyContent: "center",
  alignItems: "center",
};

const modalContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
  paddingTop: "1.5rem",
};

const rigthPannelContainer = {
  flexDirection: "column",
  width: "26rem",
  paddingLeft: "4rem",
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
  position: "absolute",
  top: "1rem",
  left: "1rem",
};
const leftPannelContainer = {};
export default App;
