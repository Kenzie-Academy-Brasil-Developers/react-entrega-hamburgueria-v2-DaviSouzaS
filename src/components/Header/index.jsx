import { InputSearch } from "../InputSearch"
import { StyledHeader } from "./style"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { CartContext } from "../../contexts/CartContext"
import logoKenzie from "../../assets/logo.svg"
import cartIcon from "../../assets/cart-icon.svg"
import logoutIcon from "../../assets/logout-icon.svg"

export function Header () {

    const { logout } = useContext(UserContext);
    const { openModal, cart } = useContext(CartContext);

    return ( 
        <StyledHeader>
            <div className="container header-box display-flex justify-content-between">
                <img src={logoKenzie} alt="logo-kenzie-hamburgueria" />
                <div className="display-flex">
                <InputSearch/>
                <div className="cart-icon-box display-flex">
                    <button className="cart-btn" onClick={openModal}><img src={cartIcon} alt="cart-icon" /></button>
                    <div className="quantity-cart display-flex justify-content-center align-item">
                        <p>{cart.length}</p>
                    </div>
                </div>
                <button onClick={logout} type="button" className="logout-btn"><img src={logoutIcon} alt="logout-icon" /></button>
                </div>
            </div>
        </StyledHeader>
    )
}