import Box from "@mui/material/Box";

import colors from "../theme/colors";

const Header = () => {
  return (
    <Box sx={mainContainer}>
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

const innerBoxStyles = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};
export default Header;
