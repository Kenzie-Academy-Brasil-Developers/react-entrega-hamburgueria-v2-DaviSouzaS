import { createContext, useState, useContext } from "react";
import { IproductItem } from "./UserContext";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";

interface IcartProviderProps {
  children: React.ReactNode;
}

interface IcartProvider {
  modal: boolean;
  openModal: () => void;
  closeModal: () => void;
  addInCart: (productId: number) => void;
  cart: IproductItem[];
  productsSumValue: number;
  cleanCart: () => void;
  removeProduct: (id: number) => void;
}

export const CartContext = createContext({} as IcartProvider);

export function CartProvider({ children }: IcartProviderProps) {

  const { product } = useContext(UserContext)

  const [modal, setModal] = useState(false);
  const [cart, setCart] = useState([] as IproductItem[]);
  
  function openModal() {
    setModal(true);
  }
  
  function closeModal() {
    setModal(false);
  }

  function addInCart(productId:number) {
    const FoundProduct = product.find(element => element.id === productId)!
    setCart([...cart, FoundProduct])
    toastAddInCart()
  }

  function cleanCart () {
    setCart([])
  }

  function removeProduct (id:number) {
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
