import { Stack, Paper, Typography } from "@mui/material";

const MuiPaper = () => {
  return (
    <Stack>
      <Paper
        sx={{
          padding: "20px",
          width: "500px",
          backgroundColor: "primary.main",
          color: "#fafafa",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
        elevation={4}
      >
        <Typography variant="h5" gutterBottom>
          Hello World !
        </Typography>
        <Typography
          variant="body2"
          sx={{
            lineHeight: "1.6",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis a
          maiores accusamus debitis incidunt ipsum deserunt alias corrupti quasi
          labore Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis a maiores accusamus debitis incidunt ipsum deserunt alias
          corrupti quasi labore.
        </Typography>
      </Paper>
    </Stack>
  );
};

export default MuiPaper;
