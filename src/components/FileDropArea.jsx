import { useState } from "react";
import Box from "@mui/material/Box";
import { useDropzone } from "react-dropzone";
import { Button } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FileDropArea = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  const handleFileName = (file) => {
    return file.name;
  };

  const handleClickUpload = () => {
    const hiddenInput = document.querySelector("input[type='file']");
    hiddenInput.click();
  };

  return (
    <Box sx={mainContainer}>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={"Select import name:"}
        sx={{
          border: "1px solid rgb(177 166 166)",
          borderRadius: "16px",
          marginBottom: "1rem",
          width: "100%",
          color: "#243D6B",
        }}
        renderValue={(selected) =>
          selected ? (
            selected
          ) : (
            <MenuItem value="">Select import name:</MenuItem>
          )
        }
      >
        <MenuItem value="Import1">Import Name 1</MenuItem>
        <MenuItem value="Import2">Import Name 2</MenuItem>
        <MenuItem value="Import3">Import Name 3</MenuItem>
      </Select>

      <Box style={labelStyles}>{`Select manifest you'd like to import`}</Box>
      <Box style={fileDropContainer}>
        <Box {...getRootProps()} style={fileDropStyle}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p style={textStyles}>Drop the files here...</p>
          ) : (
            <>
              <TextSnippetIcon style={{ color: "#F79C25" }} />
              <p style={textStyles}>
                Drag & Drop Here or{" "}
                <strong style={{ fontWeight: "800" }}>Browse</strong>
              </p>
            </>
          )}
          {files.length > 0 && <p>{handleFileName(files[0])}</p>}
        </Box>
        <Button sx={uploadBtnStyles} onClick={handleClickUpload}>
          Upload Manifest
        </Button>
      </Box>
    </Box>
  );
};

const uploadBtnStyles = {
  textTransform: "none",
  borderRadius: "10px",
  backgroundColor: "#243D6B",
  width: "55%",
  color: "white",
  margin: ".8rem",
  padding: "1rem",
  "&:hover": {
    backgroundColor: "#243D6B",
    boxShadow: "none",
    "&::before, &::after": {
      borderRadius: "none",
    },
  },
};
const mainContainer = {
  margin: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "40rem",
  flexDirection: "column",
};

const fileDropContainer = {
  width: "100%",
  border: "2px solid rgb(177 166 166)",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "20rem",
};

const fileDropStyle = {
  width: "80%",
  height: "70%",
  border: "2px dashed rgb(177 166 166)",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
};

const textStyles = {
  fontFamily: "Roboto",
  color: "#243D6B",
  fontSize: "1rem",
  fontWeight: "500",
};

const labelStyles = {
  marginBottom: "1rem",
  borderTop: "solid 2px #f5eaea",
  fontFamily: "Roboto",
  color: "#243D6B",
  fontSize: "1rem",
  fontWeight: "500",
  textAlign: "left",
  padding: ".4rem",
};

export default FileDropArea;
