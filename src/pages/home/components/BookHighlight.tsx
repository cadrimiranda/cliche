import Box from "@mui/material/Box";

import CoverImage from "../assets/bookhighlightcover.png";
import { Typography } from "@mui/material";

export const BookHighlight = () => {
  return (
    <Box
      sx={{
        maxHeight: "288px",
        height: "288px",
        width: "100vw",
        position: "relative",
        borderRadius: "0px 50px",
        backgroundImage: `linear-gradient(90deg, #2E3C4B 0%, rgba(46, 60, 75, 0.00) 100%), url(${CoverImage})`,
      }}
    >
      {/* <img src={CoverImage} alt="book highlight cover image" /> */}
      <Box
        sx={{
          position: "absolute",
          bottom: "29px",
          left: "33px",
          width: "80%",
        }}
      >
        <Typography sx={{ width: "85%" }} variant="h2">
          Sussurros na Areia Vermelha
        </Typography>
        <Typography
          variant="body2"
          color={(theme) => theme.clicheTheme.colors.white}
          sx={{ mb: "16px" }}
        >
          Ema conseguirá salvar seu planeta, ouvindo sussurros misteriosos vindo
          da areia?
        </Typography>
        <Typography
          variant="body2"
          color={(theme) => theme.clicheTheme.colors.white}
        >
          + 14 anos • Ficção científica • Em andamento{" "}
        </Typography>
      </Box>
    </Box>
  );
};
