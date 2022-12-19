import { DefaultBanner } from "../../components/DefaultBanner"
import { LoginBox } from "../../components/LoginBox"
import { StyledLoginPage } from "./style"
import { Navigate } from "react-router-dom";

export function LoginPage () {

    const token = localStorage.getItem("@TOKEN");

    return token === null ?
        <StyledLoginPage className="display-flex justify-content-center align-item gap-60">
            <LoginBox/>
            <DefaultBanner/>
        </StyledLoginPage>
    :
    <Navigate to={"/dashboard"}/>
}