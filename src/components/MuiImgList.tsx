import {
  Stack,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
} from "@mui/material";
import listOfImages from "../helpers/ListOfimgs";
const listImgs = [...listOfImages, ...listOfImages, ...listOfImages];
const listImgs2 = [...listOfImages, ...listOfImages];
const MuiImgList = () => {
  return (
    <Stack
      spacing={4}
      sx={{
        margin: "auto",
        paddingTop: "100px",
      }}
    >
      <ImageList
        sx={{
          maxWidth: "800px",
          height: "600px",
          margin: "50px auto",
        }}
        cols={3}
        rowHeight={164}
        gap={4}
      >
        {listImgs.map((imgItem, index) => (
          <ImageListItem key={index}>
            <img
              src={`${imgItem.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={imgItem.title}
              loading="lazy"
              style={
                {
                  // border: "4px solid #fff",
                }
              }
            />
            <ImageListItemBar title={imgItem.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        sx={{
          maxWidth: "800px",
          height: "600px",
          margin: "50px auto",
        }}
        variant="woven"
        cols={3}
        rowHeight={164}
        gap={4}
      >
        {listImgs.map((imgItem, index) => (
          <ImageListItem key={index}>
            <img
              src={`${imgItem.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}
              alt={imgItem.title}
              loading="lazy"
              style={
                {
                  // border: "4px solid #fff",
                }
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Box
        sx={{
          padding: "10px",
          width: "100%",
          height: "750px",
          overflowY: "scro1l",
          margin: "auto",
        }}
      >
        <ImageList
          sx={{
            width: "100%",
            height: "100%",
            margin: "50px auto",
            display: "block",
          }}
          variant="masonry"
          cols={4}
          rowHeight={180}
          gap={3}
        >
          {listImgs.map((imgItem, index) => (
            <ImageListItem key={index}>
              <img
                src={`${imgItem.img}?w=248&fit=crop&auto=format&dpr=2`}
                alt={imgItem.title}
                loading="lazy"
                style={
                  {
                    // border: "4px solid #fff",
                  }
                }
              />
              <ImageListItemBar title={imgItem.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

export default MuiImgList;
