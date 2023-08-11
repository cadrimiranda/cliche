import Divider from "@mui/material/Divider";
import { SocialMediaButtons } from "./SocialMediaButtons";
import { InputAdornment, TextField, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PasswordIcon from "@mui/icons-material/Key";

export const LoginForm = () => {
  return (
    <div>
      <SocialMediaButtons />
      <div
        style={{
          width: "100%",
          height: "22px",
          margin: "32px 0",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Divider sx={{ width: "100%" }} />
        <Typography
          sx={{
            position: "absolute",
            backgroundColor: "white",
            padding: "0 10px",
          }}
          variant="body2"
        >
          ou logue com o seu email
        </Typography>
      </div>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        sx={{ marginBottom: "24px" }}
        placeholder="E-mail"
      />
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PasswordIcon />
            </InputAdornment>
          ),
        }}
        sx={{ marginBottom: "24px" }}
        placeholder="Senha"
      />
    </div>
  );
};
