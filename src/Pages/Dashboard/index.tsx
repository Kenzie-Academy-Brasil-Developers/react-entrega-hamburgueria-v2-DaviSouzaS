import { StyledMainProductList } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductList";
import { CartContext } from "../../contexts/CartContext";
import { CartModal } from "../../components/CartModal";

export function Dashboard() {
  const { loadingPage, product } = useContext(UserContext);
  const { modal } = useContext(CartContext)

  if (loadingPage) {
    return null;
  }
  
  return product.length !== 0 ? 
    <div>

      {modal && <CartModal/>}

      <Header />

      <StyledMainProductList>
        <ProductsList/>
      </StyledMainProductList>

      <ToastContainer />
    </div>
  : 
    <Navigate to="/" />
}
