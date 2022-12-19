import { UserContext } from "../../contexts/UserContext";
import { ToastContainer } from "react-toastify"
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";

export function Dashboard() {
  const { loadingPage, user } = useContext(UserContext);

    if (loadingPage) {
        return null;
    }

    return user ? 
    <div> 
      <Header/>
        <ToastContainer/>
    </div>
     : <Navigate to = "/"/>
}
