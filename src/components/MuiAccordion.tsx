import {
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

// you can use jsx only without state to make every Accordion work alone and isolated
const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, curState: string) => {
    if (isExpanded) {
      setExpanded(curState);
    } else {
      setExpanded(false);
    }
  };
  return (
    <Stack
      sx={{
        maxWidth: "600px",
        margin: "auto",
        paddingTop: "100px",
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="react-controls"
          aria-controls="react-controls"
        >
          <Typography>React</Typography>
        </AccordionSummary>
        <AccordionSummary>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod atque
            at aut quasi nesciunt ut consectetur a, voluptas ex earum temporibus
            ducimus eum iusto minus. Laborum sequi ratione molestias harum.
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="js-controls"
          aria-controls="js-controls"
        >
          <Typography>js</Typography>
        </AccordionSummary>
        <AccordionSummary>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod atque
            at aut quasi nesciunt ut consectetur a, voluptas ex earum temporibus
            ducimus eum iusto minus. Laborum sequi ratione molestias harum.
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          id="node-controls"
          aria-controls="node-controls"
        >
          <Typography>Node</Typography>
        </AccordionSummary>
        <AccordionSummary>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod atque
            at aut quasi nesciunt ut consectetur a, voluptas ex earum temporibus
            ducimus eum iusto minus. Laborum sequi ratione molestias harum.
          </Typography>
        </AccordionSummary>
      </Accordion>
    </Stack>
  );
};

export default MuiAccordion;
