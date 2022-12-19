import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export function Dashboard() {
  const { loadingPage, user, logout } = useContext(UserContext);

    if (loadingPage) {
        return null;
    }

    return user ? <div> <button type="button" onClick={logout}>Sair</button> </div> : <Navigate to = "/"/>
}
