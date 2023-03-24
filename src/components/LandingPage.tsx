import {
  Box,
  Stack,
  Typography,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import landingImg from "../assets/images/megamenu.png";
import MuiGrid from "./MuiGrid";
const LandingPage = () => {
  return (
    <>
      {/* Navbar Section */}
      <Stack
        direction="row"
        sx={{
          backgroundColor: "primary.light",
          color: "#eee",
          marginBottom: "80px",
        }}
        p={3}
      >
        <Stack direction="row" className="container">
          <Stack spacing={1} direction="row" mr="auto">
            <Typography variant="h5">Ahmed</Typography>
          </Stack>
          <Stack spacing={2} direction="row" className="nav-links">
            <Button variant="text" color="inherit">
              Home
            </Button>
            <Button variant="text" color="inherit">
              About
            </Button>
            <Button variant="text" color="inherit">
              Services
            </Button>
            <Button variant="contained" color="primary">
              Login
            </Button>
            <Button variant="contained" color="primary">
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {/* Landing Section */}
      <Grid
        container
        alignItems="center"
        className="container"
        sx={{ marginBottom: "150px" }}
      >
        <Grid item md={6} p={3}>
          <Typography variant="h4" gutterBottom>
            Hello World
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ marginBottom: "20px" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            eaque commodi aperiam non amet libero quisquam nobis eveniet cum
            officia.
          </Typography>
          <Stack spacing={3} direction="row" sx={{ marginBottom: "50px" }}>
            <Button variant="contained" color="primary">
              Get Start
            </Button>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </Stack>
        </Grid>
        <Grid item md={6} className="img-container">
          <img className="landing-img" src={landingImg} alt="image ..." />
        </Grid>
      </Grid>
      {/* Cards */}
      <HeroTitle>Services</HeroTitle>
      <Stack className="container">
        <MuiGrid />
      </Stack>
    </>
  );
};

const HeroTitle = (props: eny) => {
  return (
    <Box
      sx={{
        margin: "auto",
        width: "fit-content",
        fontSize: "32px",
        fontWeight: " 800",
        color: "#1976d2",
        padding: " 0px 25px",
        borderRadius: "5px",
        marginBottom: "20px",
        textTransform: "uppercase",
        fontFamily: "system-ui",
        position: "relative",
        textShadow: "7px 7px 7px rgba(0,0,0,.9)",
      }}
      className="hero-title"
    >
      {props.children}
    </Box>
  );
};

export default LandingPage;
