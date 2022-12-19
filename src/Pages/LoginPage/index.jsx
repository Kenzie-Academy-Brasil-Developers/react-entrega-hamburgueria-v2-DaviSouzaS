import { DefaultBanner } from "../../components/DefaultBanner"
import { LoginBox } from "../../components/LoginBox"
import { StyledLoginPage } from "./style"

export function LoginPage () {

    return (
        <StyledLoginPage className="display-flex justify-content-center align-item gap-60">
            <LoginBox/>
            <DefaultBanner/>
        </StyledLoginPage>
    )
}