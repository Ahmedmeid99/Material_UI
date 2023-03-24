import { Stack, Grid } from "@mui/material";
import MuiCard from "./MuiCard";

const MuiGrid = () => {
  return (
    <Stack
      sx={
        {
          // backgroundColor: "primary.light",
        }
      }
    >
      <Grid container>
        <Grid item p={2} xs={12} sm={6} md={4}>
          <MuiCard />
        </Grid>
        <Grid item p={2} xs={12} sm={6} md={4}>
          <MuiCard />
        </Grid>
        <Grid item p={2} xs={12} sm={6} md={4}>
          <MuiCard />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default MuiGrid;
