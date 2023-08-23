import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type BookSearchResult = {
  title: string;
  authorName: string;
  ageRecommendation: string;
  category: string;
  isFinished: boolean;
  rank?: number;
  newChapter: boolean;
};

export const SearchListItem = ({ book }: { book: BookSearchResult }) => {
  return (
    <Box>
      <Typography variant="h6">{book.title}</Typography>
      <Typography variant="h6">
        Por <span>{book.title}</span>
      </Typography>
      <Typography variant="h6">{`${book.ageRecommendation} - ${book.category}`}</Typography>
    </Box>
  );
};
