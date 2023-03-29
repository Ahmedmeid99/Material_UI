import {
  Stack,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";

const MuiNavbar2 = () => {
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
          <Button color="inherit">More Links</Button>
          <Button color="inherit">Contact Us</Button>
        </Stack>
        <Menu id="resources-menu" anchorEl={undefined} open={true}>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Podcast</MenuItem>
          <MenuItem>Videos</MenuItem>
          <MenuItem>photos</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default MuiNavbar2;
