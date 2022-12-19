import { InputSearch } from "../InputSearch"
import { StyledHeader } from "./style"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import logoKenzie from "../../assets/logo.svg"
import cartIcon from "../../assets/cart-icon.svg"
import logoutIcon from "../../assets/logout-icon.svg"

export function Header () {

    const { logout } = useContext(UserContext);

    return ( 
        <StyledHeader className="headerMobile">
            <div className="container header-box display-flex justify-content-between">
                <img src={logoKenzie} alt="logo-kenzie-hamburgueria" />
                <div className="display-flex">
                <InputSearch/>
                <button className="cart-btn"><img src={cartIcon} alt="cart-icon" /></button>
                <button onClick={logout} type="button" className="logout-btn"><img src={logoutIcon} alt="logout-icon" /></button>
                </div>
            </div>
        </StyledHeader>
    )
}