import { DefaultBanner } from "../../components/DefaultBanner"
import { RegisterBox } from "../../components/RegisterBox"
import { StyledRegisterPage } from "./style"
import { Navigate } from "react-router-dom";

export function RegisterPage () {

    const token = localStorage.getItem("@TOKEN");

    return token === null ?
        <StyledRegisterPage className="display-flex justify-content-center align-item gap-60 column-mobile page-mobile gap-14-moblie">
            <DefaultBanner/>
            <RegisterBox/>
        </StyledRegisterPage>
    :
    <Navigate to={"/dashboard"}/>
}