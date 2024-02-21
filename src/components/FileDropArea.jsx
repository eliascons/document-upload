import { useState } from "react";
import Box from "@mui/material/Box";
import { useDropzone } from "react-dropzone";
import { Button } from "@mui/material";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import Select from "@mui/material/Select";
import colors from "../theme/colors";
import MenuItem from "@mui/material/MenuItem";

const FileDropArea = () => {
  const [files, setFiles] = useState([]);

  const [selectedValue, setSelectedValue] = useState("Select Import Name:");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
      <Select value={selectedValue} onChange={handleChange} sx={dropDownStyles}>
        <MenuItem value="Select Import Name:">Select import name:</MenuItem>
        <MenuItem value="Import1">Import Name 1</MenuItem>
        <MenuItem value="Import2">Import Name 2</MenuItem>
        <MenuItem value="Import3">Import Name 3</MenuItem>
      </Select>

      <Box style={labelStyles}>Select manifest you&apos;d like to import</Box>
      <Box style={fileDropContainer}>
        <Box {...getRootProps()} style={fileDropStyle}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p style={textStyles}>Drop the files here...</p>
          ) : (
            <>
              <TextSnippetIcon style={{ color: colors.yellow }} />
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
  backgroundColor: colors.blue,
  width: "55%",
  color: "white",
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
const mainContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "40rem",
  flexDirection: "column",
};

const fileDropContainer = {
  width: "100%",
  border: `1px solid ${colors.darkGrey}`,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "18rem",
};

const fileDropStyle = {
  width: "80%",
  height: "70%",
  border: `1px dashed ${colors.darkGrey}`,
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
};

const textStyles = {
  fontFamily: "Roboto",
  color: colors.blue,
  fontSize: "1rem",
  fontWeight: "500",
};

const labelStyles = {
  marginBottom: "1rem",
  borderTop: `solid 2px ${colors.ligthGrey}`,
  fontFamily: "Roboto",
  color: colors.blue,
  fontSize: "1rem",
  fontWeight: "500",
  textAlign: "left",
  padding: ".4rem",
};

const dropDownStyles = {
  border: `1px solid ${colors.darkGrey}`,
  borderRadius: "16px",
  marginBottom: "1rem",
  width: "100%",
  color: colors.blue,
};

export default FileDropArea;
