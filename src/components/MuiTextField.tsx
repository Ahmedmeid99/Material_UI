import React from "react";
import { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
const MuiTextField = () => {
  const [state, setState] = useState<String | null>(null);
  const handleInput = (e: React.MouseEvent<HTMLElement>) => {
    setState(e.target.value);
  };
  const isValid = state?.length > 5;
  console.log(state);
  return (
    <Stack spacing={2} direction="row">
      <Stack spacing={2} direction="column">
        <TextField label="name" size="small" variant="outlined" />
        <TextField label="name" size="medium" variant="filled" />
        <TextField label="name" color="warning" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="name" />
        <TextField label="email" />
        <TextField
          label="country"
          value="egypt"
          InputProps={{ readOnly: true }}
          // disabled
        />
        <TextField
          label="password"
          type="password"
          onChange={handleInput}
          error={!isValid}
          helperText={
            !isValid
              ? "please inter more than 5 char"
              : "Dont tell your password to enyone"
          }
          required
        />
      </Stack>
      <Stack spacing={2} direction="column">
        <TextField
          label="amount"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment postion="start">$ </InputAdornment>,
          }}
        />
        <TextField
          label="wight"
          type="number"
          InputProps={{
            endAdornment: <InputAdornment postion="end"> kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
