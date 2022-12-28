import { LoginForm } from "../LoginForm";
import { StyledLoginBox } from "./style";

export function LoginBox() {
  return (
    <StyledLoginBox className="display-flex flex-direction-column justify-content-center align-item login-box-mobile">
        <div className="title-box">
          <h1>Login</h1>
        </div>
        <LoginForm />
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <a className="button-register display-flex justify-content-center align-item" href="/registerPage">Cadastrar</a>
    </StyledLoginBox>
  );
}
