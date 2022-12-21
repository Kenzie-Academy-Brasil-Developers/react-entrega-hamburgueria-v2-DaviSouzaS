import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Products } from "../Products";
import { StyledProductsList } from "./style"

export function ProductsList () {

    const { product } = useContext(UserContext);

    return (
        <StyledProductsList className="display-flex flex-warp gap-50 container">
            {
            product.map(item => 
                <Products key={item.id} item = {item} />
            )
            }
        </StyledProductsList>
        )
}