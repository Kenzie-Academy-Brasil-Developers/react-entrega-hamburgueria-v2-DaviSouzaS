import { createContext, useState } from "react";
import { request } from "../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
        headers: { Authorization: `Bearer ${token}` },
      };

      const products = await request.get("/products", config);

      setUser(products.data);

      setLoading(false);

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);

    } catch (error) {
      setLoading(false);
    }
  }

  async function registerUser (data) {
    try {
      const response = await request.post("/users", data);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
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
        logout
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
