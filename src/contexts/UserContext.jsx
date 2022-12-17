import { createContext, useState } from "react";
import { request } from "../services/api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
    
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    async function login(data) {
        try {
          setLoading(true);
          const response = await request.post("/login", data);
          window.localStorage.setItem("@TOKEN", response.data.accessToken);
          setLoading(false);
          console.log(response)
        } catch (error) {
          setLoading(false);
        }
    }
    
    function showPass() {
        setShowPassword(!showPassword);
    }

    return (
    <UserContext.Provider
        value={{
          showPassword,
          showPass,
          loading,
          setLoading,
          login
        }}>
      {children}
    </UserContext.Provider>
    )
}

  