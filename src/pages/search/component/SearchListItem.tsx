import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { getCover } from "../../home/assets/booksLists";
import Chip from "@mui/material/Chip";
import { useCallback } from "react";

export type BookSearchResult = {
  title: string;
  authorName: string;
  ageRecommendation: string;
  category: string;
  isFinished?: boolean;
  rank?: number;
  isNew?: boolean;
  newChapter?: boolean;
};

export const SearchListItem = ({ book }: { book: BookSearchResult }) => {
  const getChip = useCallback(() => {
    if (book.newChapter) {
      return <Chip size="small" color="info" label="NOVO CAPITULO" />;
    }

    if (book.isNew) {
      return <Chip size="small" color="info" label="NOVA HISTÓRIA" />;
    }

    if (book.isFinished) {
      return <Chip size="small" color="info" label="EM ANDAMENTO" />;
    }
  }, [book]);

  return (
    <Grid mt="14px" container flexDirection="row">
      <Box
        component="img"
        sx={{
          width: "154px",
          height: "110px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "8px",
          backgroundImage: (t) =>
            `${t.clicheTheme.colors.boxShadowCover}, url(${getCover()})`,
        }}
      />
      <Box
        sx={{
          padding: "10px 0px 10px 14px",
          maxWidth: "160px",
          minWidth: "160px",
          "> h6, p": {
            textOverflow: "ellipsis",
            maxWidth: "170px",
            whiteSpace: "nowrap",
            overflow: "hidden",
          },
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {book.title}
        </Typography>
        <Typography mb="8px" variant="body2">
          Por{" "}
          <span style={{ textDecoration: "underline" }}>{book.authorName}</span>
        </Typography>
        <Typography variant="body2">{`${book.ageRecommendation} - ${book.category}`}</Typography>
        <Grid container flexDirection="row">
          {getChip()}
        </Grid>
      </Box>
      <Grid container justifyContent="center" alignItems="center">
        <ChevronRightIcon />
      </Grid>
    </Grid>
  );
};
