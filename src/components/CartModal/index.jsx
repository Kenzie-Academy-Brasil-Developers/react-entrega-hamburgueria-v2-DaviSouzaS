import { StyledModal } from "./style"
import { CartContext } from "../../contexts/CartContext"
import { useContext } from "react"
import { CartProducts } from "../CartProducts"

export function CartModal () {

    const { closeModal, cart, productsSumValue, cleanCart } = useContext(CartContext)

    return (
    <StyledModal className="display-flex justify-content-center">
        <div className="modal-cart">
            <div className="header-modal display-flex justify-content-between align-item">
                <p>Carrinho de compras</p>
                <button onClick={closeModal}>X</button>
            </div>

            { cart.length === 0 ?
            <div className="waring-modal display-flex flex-direction-column justify-content-center align-item">
                <p className="waring-cart-1">Sua sacola está vazia</p>
                <p className="waring-cart-2">Adicione itens</p>
            </div>
            :
            <div className="display-flex flex-direction-column align-item">
                <div className="products-list display-flex flex-direction-column align-item">
                    {
                    cart.map(item => <CartProducts key = {item.id} item = {item}/>)
                    }   
                </div>
                <div className="total-value-box">
                    <div className="cart-infos display-flex justify-content-between">
                        <p>Total</p>
                        <p className="total-value">R$ {productsSumValue}</p>
                    </div>
                    <button onClick={() => cleanCart()} className="clean-cart-btn">Remover todos</button>
                </div>
            </div>
            }
        </div>
    </StyledModal>
    )
}