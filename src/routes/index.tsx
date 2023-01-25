import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { Dashboard } from "../Pages/Dashboard";

export function PrincipalRoutes () {
    return (
            <Routes>
                <Route path="/" element = {<LoginPage/>}/>
                <Route path="/registerPage" element = {<RegisterPage/>}/>
                <Route path="/dashboard" element = {<Dashboard/>}/>
            </Routes>
    )
}