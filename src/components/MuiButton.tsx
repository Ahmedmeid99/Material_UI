import React from "react";
import { Stack, Button } from "@mui/material";
////////////////
// Button
////////////////
// variant="text"         => for btn-more details
// variant="contained"    => for login logout
// variant="outlined"     => for toggle delete ...

// color="primary"        => or primary secondary success error warning info
// href=""                => make a button <a href=""> <a/>

// size="small"           => or medium large

///////////////
// Stack (is a parent component)
////////////////
// spacing={2}             => margin-top: 32px;
// direction="column"
// display="block"         => default is ...
const MuiButton = () => {
  return (
    <Stack spacing={4} direction="column">
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://goggle.com">
          text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" color="primary" size="small">
          small
        </Button>
        <Button variant="contained" color="primary" size="medium">
          medium
        </Button>
        <Button variant="contained" color="primary" size="large">
          large
        </Button>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
