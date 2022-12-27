import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { request } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IuserProviderProps {
  children: React.ReactNode;
}

export interface IproductItem {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface IdataLogin {
  email: string;
  password: string;
}

interface IdataRegister {
  name: string;
  email: string;
  password: string; 
}

interface IuserProvider {
  showPassword: boolean;
  setShowPass: () => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  login: (data: IdataLogin) => Promise<void>;
  registerUser: (data: IdataRegister) => Promise<void>;
  setShowConfPass: () => void;
  showConfirmPass: boolean;
  product: IproductItem[] ;
  loadingPage: boolean;
  logout: () => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export type FormLogin = {
  email: string;
  password: string;
}

export type FormRegister = {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export const UserContext = createContext({} as IuserProvider);

export function UserProvider({ children }: IuserProviderProps) {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [product, setProducts] = useState([] as IproductItem[]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  async function login(data:IdataLogin) {
    try {

      setLoading(true);

      const response = await request.post("/login", data);

      window.localStorage.clear();

      window.localStorage.setItem("@TOKEN", response.data.accessToken);

      const token = localStorage.getItem("@TOKEN");

      const config = {
        headers: { Authorization: `Bearer ${token}`},
      };

      const products = await request.get("/products", config);

      setProducts(products.data);

      setLoading(false);

      toastSuccessLogin();

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

    } catch (error) {
      setLoading(false);
      toastError()
    }
  }

  async function registerUser (data:IdataRegister) {
    try {
      const response = await request.post("/users", data);
      toastSuccessRegister()
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toastError()
    }
  }

  useEffect(() => {

    async function verifyingToken () {

    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setLoadingPage(false)
      return
    }

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    try {
      const products = await request.get("/products", config);
      setProducts(products.data);
    } catch (error) {
      window.localStorage.clear();
    } finally {
      setLoadingPage(false)
    }
    }
    
    verifyingToken()
  }, []);

  function logout() {
    setProducts([]);
    window.localStorage.clear();
    navigate("/");
  }

  function setShowPass() {
    setShowPassword(!showPassword);
  }

  function setShowConfPass() {
    setShowConfirmPass(!showConfirmPass);
  }

  function toastError() {
    toast.error("Ops! Algo deu errado", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function toastSuccessLogin() {
    toast.success("Login realizado com sucesso!", {
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

  function toastSuccessRegister() {
    toast.success("Conta criada com sucesso!", {
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
    <UserContext.Provider
      value={{
        showPassword,
        setShowPass,
        loading,
        setLoading,
        login,
        registerUser,
        setShowConfPass,
        showConfirmPass,
        product,
        loadingPage,
        logout,
        search, 
        setSearch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
