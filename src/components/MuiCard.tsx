import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import img from "../assets/images/stats.jpg";
const MuiCard = () => {
  return (
    <Box
      sx={
        {
          // width: "350px",
        }
      }
    >
      <Card>
        <CardMedia title="" height="160px" component="img" image={img} />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            React
          </Typography>
          <Typography variant="body1" component="div" color="text.secondary">
            Lorem, ipsum dolor sit amet constur adipisicing elit Commodi dolores
            totam consequntur corporis magni consectetur fugiat Commodi, sequi!
            Laudantium, ipsa ipsum hic quisquam a odio. Fugiat.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">LearnMore</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
