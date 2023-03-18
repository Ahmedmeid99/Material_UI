import React from "react";
import { Typography } from "@mui/material";

// variant="h6"         => tag h6 , style h6
// component="h6"       => tag h6 only

// variant="body1       => tag p
// variant="body2       => tag p font size less than body1

// variant="subtitle1"  => tag h6 + font-size less than h6
// variant="subtitle2"  => tag h6 + font-size less than h6 and subtitle1

// gutterBottom         => add margin-bottom depond on tag
const TypographyComponent = () => {
  return (
    <div>
      <Typography variant="h1"> h1</Typography>
      <Typography variant="h2"> h2</Typography>
      <Typography variant="h3"> h3</Typography>
      <Typography variant="h4"> h4</Typography>
      <Typography variant="h5"> h5</Typography>
      <Typography variant="h6" gutterBottom>
        {" "}
        h6
      </Typography>
      <Typography variant="h6" component="h1">
        h6
      </Typography>
      <Typography variant="body1"> body 1</Typography>
      <Typography variant="body2"> body 2</Typography>
      <Typography variant="subtitle1"> subtitle 1</Typography>
      <Typography variant="subtitle2"> subtitle 2</Typography>
    </div>
  );
};

export default TypographyComponent;
