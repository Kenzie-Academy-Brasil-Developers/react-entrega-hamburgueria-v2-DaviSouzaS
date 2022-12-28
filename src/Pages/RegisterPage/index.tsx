import { DefaultBanner } from "../../components/DefaultBanner"
import { RegisterBox } from "../../components/RegisterBox"
import { StyledRegisterPage } from "./style"

export function RegisterPage () {
    return (
        <StyledRegisterPage className="display-flex justify-content-center align-item gap-60 column-mobile page-mobile gap-14-moblie">
            <DefaultBanner/>
            <RegisterBox/>
        </StyledRegisterPage>
    )
}