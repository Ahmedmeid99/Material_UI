import { Stack, AppBar, Toolbar, Button, Typography } from "@mui/material";

const MuiNavbar = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: "50px" }}>
      <Toolbar>
        <Typography variant="h6" component="div">
          POKEMONAPP
        </Typography>
        <Stack spacing={3} direction="row" sx={{ marginLeft: "auto" }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact Us</Button>
          <Button color="inherit">More Links</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar;
