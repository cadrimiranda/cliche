import { Form } from "./Form";

export const LoginForm = () => {
  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <Form
        subtitle={"ou logue com o seu email"}
        helperText={"Esqueci minha senha"}
        buttonText={"Logar"}
      />
    </div>
  );
};
