import { Box } from "@mui/material";
import colors from "../theme/colors";

const ValueField = ({ title, description }) => {
  return (
    <Box sx={mainContainer}>
      <Box sx={itemsWrapper}>
        <Box sx={titleStyles}>{title}</Box>
        <Box sx={descriptionStyles}>{description}</Box>
      </Box>
    </Box>
  );
};

const mainContainer = {
  paddingTop: "1rem",
  paddingBottom: "1rem",
};

const titleStyles = {
  paddingBottom: "1rem",
  color: colors.blue,
  fontWeight: "600",
  fontFamily: "Roboto",
};

const descriptionStyles = {
  fontWeight: "600",
  fontSize: ".8rem",
  fontFamily: "Roboto",
  color: colors.green,
};
const itemsWrapper = {
  paddingTop: "1rem",
  paddingBottom: "1rem",
  maxWidth: "23rem",
  borderTop: `2px solid ${colors.ligthGrey}`,
  borderBottom: `2px solid ${colors.ligthGrey}`,
};
export default ValueField;
