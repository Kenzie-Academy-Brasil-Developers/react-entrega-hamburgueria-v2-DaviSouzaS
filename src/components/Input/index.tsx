import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";
import { StyledInput } from "./style"

interface IinputProps  extends InputHTMLAttributes<HTMLImageElement>{
    label: string;
    type: string;
    id: string;
    placeholder: string;
    register: UseFormRegisterReturn;
    btnShowPass?: JSX.Element;
}

export function Input ({label, type, id, placeholder, register, btnShowPass}:IinputProps ) {

    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <div className="input-box display-flex justify-content-center">
                <input type={type} id={id} placeholder={placeholder} {...register}/>
                {btnShowPass}
            </div>
        </StyledInput>
    )
}