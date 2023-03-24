import { Stack } from "@mui/material";
import MuiPaper from "./MuiPaper";

const MuiStack = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "primary.light",
        color: "#eeee",
      }}
      spacing={3}
      p={4}
      direction="row-reverse"
    >
      <MuiPaper />
      <MuiPaper />
    </Stack>
  );
};

export default MuiStack;
