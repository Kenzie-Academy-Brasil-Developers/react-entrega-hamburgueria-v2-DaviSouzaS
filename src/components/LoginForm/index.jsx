import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../Input"
import { Button } from "../Button"
import { StyledLoginFormBox } from "./style"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import visibility from "../../assets/visibility-icon.svg"
import visibilityOff from "../../assets/visibility-off-icon.svg"
import spinner from "../../assets/spinner.svg"
import * as yup from "yup"

export function LoginForm () {

    const { loading, showPassword, setShowPass, login } = useContext (UserContext)

    const validate = yup.object().shape({
        email: yup.string().required("O email é obrigatório"),

        password: yup.string().required("A senha é obrigatória")
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(validate) })

    return (
        <StyledLoginFormBox className="form-box login-form" onSubmit={handleSubmit(login)}>
        
            <div className="input-field">
                <Input label={"Email"} type="email" id="email" placeholder="Digite aqui seu email" register = {register("email")}/> 
                {errors.email?.message && <p className="waring">{errors.email.message}</p>} 
            </div>
            
            <div className="input-field">
                <Input label={"Senha"} type={showPassword ? "text" : "password"} id="password" placeholder="Digite aqui sua senha" register = {register("password")} btnShowPass = {<button type="button" onClick={setShowPass}> <img className="visibility-btn" src={showPassword ? visibilityOff : visibility} alt="eye-icon" /></button>}/>
                {errors.password?.message && <p className="waring">{errors.password.message}</p>}
            </div>

            <Button type={"submit"} name = {loading ? <><img className="loading-icon" src={spinner} alt="loading-icon" /></> : <>Logar</>}/>

            <ToastContainer/>
        </StyledLoginFormBox>
    )
}