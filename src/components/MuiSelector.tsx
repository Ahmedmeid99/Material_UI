import { useState } from "react";
import { Stack, Box, TextField, MenuItem } from "@mui/material";
const MuiSelector = () => {
  const [state, setState] = useState("");
  const [selectedData, setSelectedData] = useState<string[]>([]);
  console.log(state);
  console.log(selectedData);
  const handleSelectedData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value as string);
  };
  const handleAllSelectedData = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    const cond = typeof value === "string" ? value.split(",") : value;
    setSelectedData(cond);
  };
  return (
    <Stack spacing={4} direction="column">
      <Box width="250px">
        <TextField
          label="Select Country"
          value={state}
          onChange={handleSelectedData}
          fullWidth
          select
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Austraia</MenuItem>
        </TextField>
      </Box>
      <Box width="250px">
        <TextField
          label="Select Countries"
          value={selectedData}
          onChange={handleAllSelectedData}
          fullWidth
          select
          SelectProps={{
            multiple: true,
          }}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Austraia</MenuItem>
        </TextField>
      </Box>
    </Stack>
  );
};

export default MuiSelector;
