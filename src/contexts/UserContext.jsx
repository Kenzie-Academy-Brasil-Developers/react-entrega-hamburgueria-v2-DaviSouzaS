import { createContext, useState } from "react";
import { request } from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);

  async function login(data) {
    try {
      setLoading(true);
      const response = await request.post("/login", data);
      window.localStorage.setItem("@TOKEN", response.data.accessToken);
      setLoading(false);
      console.log(response);
    } catch (error) {
      setLoading(false);
    }
  }

  async function registerUser (data) {
    try {
      const response = await request.post("/users", data);
    } catch (error) {
    }
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
        showConfirmPass
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
