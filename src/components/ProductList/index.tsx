import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Products } from "../Products";
import { StyledProductsList } from "./style";

export function ProductsList() {
  const { search, product } = useContext(UserContext);

  const searchLowerCase = search.toLowerCase();
  const searchedProducts = product.filter((item) =>
    item.name.toLowerCase().includes(searchLowerCase));

  return (
    <StyledProductsList className="display-flex flex-warp gap-50 container">
        {searchedProducts.map((item) => (
        <Products key={item.id} item={item}/>
        ))}
    </StyledProductsList>
)
}
