import { StyledMainProductList } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { ProductsList } from "../../components/ProductList";

export function Dashboard() {
  const { loadingPage, product } = useContext(UserContext);

  if (loadingPage) {
    return null;
  }

  return product ? (
    <div>
      <Header />

      <StyledMainProductList>
        <ProductsList/>
      </StyledMainProductList>

      <ToastContainer />
    </div>
  ) : (
    <Navigate to="/" />
  );
}
