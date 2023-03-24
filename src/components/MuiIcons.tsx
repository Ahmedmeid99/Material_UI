import React from "react";
import { Stack, Button, ButtonGroup, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const MuiIcons = () => {
  return (
    <Stack spacing={2} direction="column">
      <Stack spacing={3} direction="row">
        <Button variant="contained" color="primary">
          send
        </Button>
        <Button variant="contained" color="primary">
          send
        </Button>
      </Stack>

      <Stack spacing={3} direction="row">
        <Button variant="contained" color="primary" startIcon={<SendIcon />}>
          send
        </Button>
        <Button variant="contained" color="primary" endIcon={<SendIcon />}>
          send
        </Button>
      </Stack>
      <Stack spacing={3} direction="row">
        <IconButton variant="contained" color="primary.main">
          <SendIcon />
        </IconButton>
      </Stack>
      {/* ButtonGroup */}
      <Stack spacing={3} direction="row">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="grouped button"
        >
          <Button>right</Button>
          <Button>center</Button>
          <Button>left</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={3} direction="row">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="grouped button"
          orientation="vertical"
        >
          <Button>right</Button>
          <Button>center</Button>
          <Button>left</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiIcons;
