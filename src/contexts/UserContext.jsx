import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { request } from "../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [loadingPage, setLoadingPage] = useState(true);


  const navigate = useNavigate();

  async function login(data) {
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

      setUser(products.data);

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

  async function registerUser (data) {
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
      setUser(products.data);
    } catch (error) {
      window.localStorage.clear();
    } finally {
      setLoadingPage(false)
    }
    }
    
    verifyingToken()
  }, []);

  function logout() {
    setUser(null);
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
        user,
        loadingPage,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
