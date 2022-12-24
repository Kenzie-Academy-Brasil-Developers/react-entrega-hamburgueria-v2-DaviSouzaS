import { createContext, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

export const CartContext = createContext({});

export function CartProvider({ children }) {

  const { product } = useContext(UserContext)

  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([]);
  
  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function addInCart(productId) {
    const FoundProduct = product.find(element => element.id === productId)
    toastAddInCart()
    setCart([...cart, FoundProduct])
  }

  function cleanCart () {
    setCart([])
  }

  function removeProduct (id) {
    const removeProduct = cart.filter((product) => product.id !== id)
    setCart(removeProduct)
  }

  const initalValue = 0
  const productsSumValue = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, initalValue)

  function toastAddInCart() {
    toast.success("Produto Adicionado!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <CartContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
        addInCart,
        cart,
        productsSumValue,
        cleanCart,
        removeProduct
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
