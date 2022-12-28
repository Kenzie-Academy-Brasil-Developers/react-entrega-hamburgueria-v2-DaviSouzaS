import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { StyledcartProdcutCard } from "./style"
import { IproductItem } from "../../contexts/UserContext"
import trashIcon from "../../assets/trash-icon.svg"

interface IcartProductsCardProps {
    item: IproductItem
}

export function CartProducts ({ item }:IcartProductsCardProps) {

    const { removeProduct } = useContext(CartContext)

    return (
        <StyledcartProdcutCard className="cart-product-card display-flex">
            <div className="img-box display-flex justify-content-center align-item">
                <img src={item.img} alt={item.name} />
            </div>
            <div className ="product-infos display-flex justify-content-between">
                <p>{item.name}</p>
                <button onClick={() => removeProduct(item.id)}><img src={trashIcon} alt="trash-icon" /></button>
            </div>
        </StyledcartProdcutCard>
    )
}