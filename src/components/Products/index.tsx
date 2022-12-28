import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { IproductItem } from "../../contexts/UserContext";
import { StyledProduct } from "./style";

interface IproductCardProps {
  item: IproductItem
}

export function Products({ item }:IproductCardProps) {
  const { addInCart } = useContext(CartContext)

  return (
  <StyledProduct className="product-mobile">
    <div className="img-product-box display-flex justify-content-center align-item">
      <img src={item.img} alt={item.name} />
    </div>
    <div className="product-infos-box">
      <p className="product-name">{item.name}</p>
      <p className="product-category">{item.category}</p>
      <p className="product-price">R$ {item.price}</p>
      <button type="button" onClick={() => addInCart(item.id)}>Adicionar</button>
    </div>
  </StyledProduct>
  )
}
