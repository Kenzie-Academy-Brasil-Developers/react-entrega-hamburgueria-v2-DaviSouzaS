import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Input } from "../Input"
import { Button } from "../Button"
import visibility from "../../assets/visibility-icon.svg"
import visibilityOff from "../../assets/visibility-off-icon.svg"
import * as yup from "yup"

export function RegisterForm () {

    const { showPassword, setShowPass, registerUser, setShowConfPass, showConfirmPass} = useContext (UserContext)

    const validate = yup.object().shape({
        name: yup.string().required("O nome é obrigatório")
        .min(3, "O nome precisa ter mais que 2 caracteres")
        .max(100, "O nome pode ter até 100 caracteres"),

        email: yup.string().required("O email é obrigatório")
        .email("É necessário fornecer um email"),

        password: yup.string().required("A senha é obrigatória")
        .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
        .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
        .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
        .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
        .min(8, "É necessário uma senha de no mínimo 8 caracteres"),

        confirm: yup.string().required("É necessário confirmar sua senha")
        .oneOf([yup.ref('password')], "As senhas não coincidem"),
    })

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(validate) })

    return (
        <form onSubmit={handleSubmit(registerUser)} noValidate>

            <div>
            <Input label={"Nome"} type="text" id="name" placeholder="Digite aqui seu nome" register = {register("name")}/>
            {errors.name?.message && <p>{errors.name.message}</p>}
            </div>

            <div>
            <Input label={"Email"} type="email" id="mail" placeholder="Email" register = {register("email")}/>
            {errors.email?.message && <p>{errors.email.message}</p>}
            </div>

            <div>
            <Input type={showPassword ? "text" : "password"} id="pass" placeholder="Senha" register = {register("password")} btnShowPass = {<button type="button" onClick={setShowPass}> <img src={showPassword ? visibilityOff : visibility} alt="eye-icon" /></button>}/>
            {errors.password?.message && <p>{errors.password.message}</p>}
            </div>

            <div>
            <Input type={showConfirmPass ? "text" : "password"} id="confirm" placeholder="Confirmar senha" register = {register("confirm")} btnShowPass = {<button type="button" onClick={setShowConfPass}> <img src={showConfirmPass ? visibilityOff : visibility} alt="eye-icon" /></button>}/>
            {errors.confirm?.message && <p>{errors.confirm.message}</p>}
            </div>

            <Button type = {"submit"} name = {"Cadastrar"}/>
        </form>
    )
}