import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export type BookItem = {
  id: string;
  title: string;
  hasNewChapter?: boolean;
  volum?: number;
  cover: string;
};

type BookListItemProps = {
  book: BookItem;
};

export const BookListItem = ({ book }: BookListItemProps) => {
  return (
    <Box
      sx={{
        listStyleType: "none",
        minWidth: "110px",
        height: "155px",
        mr: "8px",
        position: "relative",
      }}
      key={book.title}
      component="li"
    >
      <img
        style={{ width: "100%", height: "auto" }}
        src={book.cover}
        srcSet={book.cover}
        alt="alt"
        loading="lazy"
      />
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: book.hasNewChapter ? "space-between" : "flex-end",
          py: "6px",
          top: 0,
          background:
            "linear-gradient(360deg, #212B36 0%, rgba(33, 43, 54, 0.00) 100%)",
        }}
      >
        {book.hasNewChapter && (
          <Box
            sx={{
              display: "inline-flex",
              gap: "10px",
              height: "16px",
              width: "90px",
              padding: "2px",
              borderRadius: "0px 10px 10px 0px",
              backgroundColor: (theme) =>
                theme.clicheTheme.colors.primary.solid.main,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                whiteSpace: "nowrap",
                textTransform: "uppercase",
              }}
              variant="historytag"
              color={(theme) => theme.clicheTheme.colors.white}
              component="p"
            >
              novo capítulo
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            padding: "0px 6px",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
            flexDirection: "column",
          }}
        >
          <Typography
            color={(theme) => theme.clicheTheme.colors.white}
            variant="historycover"
            component="p"
            sx={{
              width: "80px",
              textAlign: "center",
            }}
          >
            {book.title.toUpperCase()}
          </Typography>
          {book.volum && (
            <Typography
              color={(theme) => theme.clicheTheme.colors.secondary.solid.main}
              variant="historycover"
              component="p"
            >{`VOLUME ${book.volum}`}</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};
