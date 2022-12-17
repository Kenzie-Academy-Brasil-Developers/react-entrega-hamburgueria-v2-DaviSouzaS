export function Input ({label, type, id, placeholder, register, btnShowPass, disabled, value}) {

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <div className="input-default display-flex justify-content-center">
                <input type={type} id={id} placeholder={placeholder} {...register} disabled = {disabled} value = {value}/>
                {btnShowPass}
            </div>
        </div>
    )
}