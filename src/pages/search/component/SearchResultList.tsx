import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { BookSearchResult, SearchListItem } from "./SearchListItem";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const fakeData: BookSearchResult[] = [
  {
    title: "O Terrário",
    authorName: "Alana Reis",
    ageRecommendation: "Livre",
    category: "Suspense",
    isFinished: true,
    rank: 1,
    newChapter: false,
  },
  {
    title: "A Queda do Protetor Sagrado",
    authorName: "Silvio Emanuel",
    ageRecommendation: "+12",
    category: "Aventura",
    isFinished: false,
    newChapter: true,
  },
  {
    title: "A Queda do Protetor Sagrado",
    authorName: "Silvio Emanuel",
    ageRecommendation: "+12",
    category: "Aventura",
    isFinished: false,
    newChapter: true,
  },
  {
    title: "A Queda do Protetor Sagrado",
    authorName: "Silvio Emanuel",
    ageRecommendation: "+12",
    category: "Aventura",
    isFinished: false,
    newChapter: true,
  },
  {
    title: "A Queda do Protetor Sagrado",
    authorName: "Silvio Emanuel",
    ageRecommendation: "+12",
    category: "Aventura",
    isFinished: false,
    newChapter: true,
  },
  {
    title: "A Queda do Protetor Sagrado",
    authorName: "Silvio Emanuel",
    ageRecommendation: "+12",
    category: "Aventura",
    isFinished: false,
    newChapter: true,
  },
];

export const SearchResultList = () => {
  return (
    <Box sx={{ mt: "32px" }}>
      <Typography variant="h6">Principais buscas</Typography>
      <Grid2>
        {fakeData.map((x) => (
          <SearchListItem book={x} />
        ))}
      </Grid2>
    </Box>
  );
};
