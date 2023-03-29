import { Stack, Box, Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
const MuiBreadcrumbs = () => {
  return (
    <Stack spacing={3}>
      <Box m={2}>
        <Breadcrumbs>
          <Link href="#" underline="hover">
            Home
          </Link>
          <Link href="#" underline="hover">
            Catalog
          </Link>
          <Link href="#" underline="hover">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs separator="-" itemsAfterCollapse={2} maxItems={3}>
          <Link href="#" underline="hover">
            Home
          </Link>
          <Link href="#" underline="hover">
            Catalog
          </Link>
          <Link href="#" underline="hover">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
      <Box m={2}>
        <Breadcrumbs separator="_" maxItems={3}>
          <Link href="#" underline="hover">
            Home
          </Link>
          <Link href="#" underline="hover">
            Catalog
          </Link>
          <Link href="#" underline="hover">
            Accessories
          </Link>
          <Typography color="text.primary">Shoes</Typography>
        </Breadcrumbs>
      </Box>
    </Stack>
  );
};

export default MuiBreadcrumbs;
