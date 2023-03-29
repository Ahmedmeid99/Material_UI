import { Stack, Link } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={3} direction="row">
      <Link href="#" underline="none">
        google
      </Link>
      <Link href="#" underline="hover">
        google
      </Link>
      <Link href="#" color="secondary">
        google
      </Link>
      <Link href="#" variant="h6" component="a">
        google
      </Link>
    </Stack>
  );
};

export default MuiLink;
