import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { StyledCartCounter } from "./style";
import { StyledQuantityCart } from "./style";
import cartIcon from "../../assets/cart-icon.svg"

export function CartCounter () {

    const { openModal, cart } = useContext(CartContext);

    return (
        <StyledCartCounter className="display-flex">
            <button className="cart-btn" onClick={openModal}><img src={cartIcon} alt="cart-icon" /></button>
            <StyledQuantityCart className="display-flex justify-content-center align-item quantity-cart-mobile">
                <p>{cart.length}</p>
            </StyledQuantityCart>
        </StyledCartCounter>
    )
}