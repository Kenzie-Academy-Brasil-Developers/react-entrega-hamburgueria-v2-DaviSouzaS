import { StyledProduct } from "./style";
import { Button } from "../Button";

export function Products({ item }) {

  return (
  <StyledProduct>
    <div className="img-product-box display-flex justify-content-center align-item">
      <img src={item.img} alt={item.name} />
    </div>
    <div className="product-infos-box">
      <p className="product-name">{item.name}</p>
      <p className="product-category">{item.category}</p>
      <p className="product-price">R$ {item.price}</p>
      <Button type={"button"} name={"Adicionar"}/>
    </div>
  </StyledProduct>
  )
}
