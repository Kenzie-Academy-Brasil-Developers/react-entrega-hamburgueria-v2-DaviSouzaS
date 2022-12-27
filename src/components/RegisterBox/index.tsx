import { RegisterForm } from "../RegisterForm"
import { StyledRegisterBox } from "./style"

export function RegisterBox() {
    return (
     <StyledRegisterBox className="display-flex flex-direction-column justify-content-center align-item">
        <div className="display-flex justify-content-between register-header">
            <h1>Cadastro</h1>
            <a href="/">Retornar para o login</a>
        </div>
        <RegisterForm/>
     </StyledRegisterBox>
    )
  }
  