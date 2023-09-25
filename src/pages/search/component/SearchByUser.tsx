import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const fakeData: Array<{ user: string; name: string; info?: string }> = [
  {
    user: "aventureiraemcasa",
    name: "Amora Lima",
    info: "6 histórias escritas",
  },
  {
    user: "estantedelivros",
    name: "Sabrina Omori",
  },
  {
    user: "amor_mais_amor",
    name: "Lana Reis",
    info: "+50 histórias lidas",
  },
  {
    user: "armori.aqui",
    name: "Armani Caqui",
    info: "9 histórias lidas",
  },
  {
    user: "alanberrola",
    name: "Alan dos Santos",
  },
  {
    user: "derflecha",
    name: "Flecha dos Santos",
  },
  {
    user: "aventureiraemcasa",
    name: "Amora",
    info: "escritas",
  },
  {
    user: "aventureiraemcasa",
    name: "Amora",
    info: "escritas",
  },
  {
    user: "aventureiraemcasa",
    name: "Amora",
    info: "escritas",
  },
];

export const SearchByUser = () => {
  return (
    <Box>
      {fakeData.map((x) => (
        <Grid2 container flexDirection="row" sx={{ mb: "14px" }}>
          <Avatar
            sx={{ mr: "14px", width: "68px", height: "68px" }}
            alt={`Avatar of ${x.name}`}
          />
          <Box sx={{ my: "auto" }}>
            <Typography variant="h6">{x.user}</Typography>
            <Typography variant="body1">{x.name}</Typography>
            <Typography variant="body1">{x.info}</Typography>
          </Box>
        </Grid2>
      ))}
    </Box>
  );
};
