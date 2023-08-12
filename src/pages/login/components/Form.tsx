import Divider from "@mui/material/Divider";
import { SocialMediaButtons } from "./SocialMediaButtons";
import { InputAdornment, TextField, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PasswordIcon from "@mui/icons-material/Key";
import VisibilityOn from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import Button from "@mui/material/Button";

export const Form = ({
  subtitle,
  helperText,
  buttonText,
}: {
  subtitle: string;
  helperText: string;
  buttonText: string;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          color={(theme) => theme.palette.text.secondary}
        >
          {subtitle}
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
          endAdornment: (
            <InputAdornment
              aria-label="toggle password visibility"
              position="end"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <VisibilityOff /> : <VisibilityOn />}
            </InputAdornment>
          ),
        }}
        sx={{ marginBottom: "10px" }}
        placeholder="Senha"
        type="password"
      />
      <Link
        variant="body2"
        sx={{
          textAlign: "right",
          marginBottom: "14px",
        }}
        href="#"
        underline="always"
      >
        {helperText}
      </Link>
      <Button size="large">{buttonText}</Button>
    </div>
  );
};
