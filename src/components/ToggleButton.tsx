import { useState } from "react";
import {
  Stack,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
const MuiToggleButton = () => {
  const [state, setState] = useState<String[]>([]);
  const [state2, setState2] = useState<String | null>(null);
  const handleToggleButtons = (
    e: React.MouseEvent<HTMLElement>,
    updated: String[]
  ) => {
    setState(updated);
  };
  console.log(state);
  console.log(state2);
  const handleToggleButtons2 = (
    e: React.MouseEvent<HTMLElement>,
    updated: String | null
  ) => {
    setState2(updated);
  };
  return (
    <Stack spacing={2} direction="row">
      <ToggleButtonGroup
        value={state}
        onChange={handleToggleButtons}
        aria-label="toggle buttons"
      >
        <ToggleButton value="one" aria-label="one">
          <SendIcon />
        </ToggleButton>
        <ToggleButton value="two" aria-label="two">
          <SendIcon />
        </ToggleButton>
        <ToggleButton value="three" aria-label="three">
          <SendIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={state2}
        onChange={handleToggleButtons2}
        aria-label="toggle buttons2"
        exclusive
      >
        <ToggleButton value="one2" aria-label="one2">
          <SendIcon />
        </ToggleButton>
        <ToggleButton value="two2" aria-label="two2">
          <SendIcon />
        </ToggleButton>
        <ToggleButton value="three2" aria-label="three2">
          <SendIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default MuiToggleButton;
