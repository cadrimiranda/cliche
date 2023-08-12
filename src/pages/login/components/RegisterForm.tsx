import { Form } from "./Form";
import Chip from "@mui/material/Chip";

export const RegisterForm = () => {
  return (
    <div>
      <Chip
        color="primary"
        label="Junte-se a +4000 leitores e tenha acesso ilimitado a histórias que você também pode escrever!"
        sx={{
          height: "auto",
          marginBottom: "32px",
          "& .MuiChip-label": {
            display: "block",
            whiteSpace: "normal",
          },
        }}
      />
      <Form
        subtitle={"ou crie uma conta"}
        helperText={"Preciso de ajuda"}
        buttonText={"Cadastrar"}
      />
    </div>
  );
};
