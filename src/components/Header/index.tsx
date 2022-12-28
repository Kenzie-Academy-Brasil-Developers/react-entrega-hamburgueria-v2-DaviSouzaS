import { InputSearch } from "../InputSearch"
import { StyledHeader } from "./style"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { CartCounter } from "../CartCounter"
import logoKenzie from "../../assets/logo.svg"
import logoutIcon from "../../assets/logout-icon.svg"
import searchIcon2 from "../../assets/search-icon-2.svg"

export function Header () {

    const { logout, searchMobile, openSearchMobile } = useContext(UserContext);

    return ( 
        <StyledHeader>
            {
            searchMobile ? 
            <div className="search-input-mobile-box display-flex justify-content-center">
                <InputSearch/>
            </div>
            :
            <div className="container header-box header-box-mobile display-flex justify-content-between">
                <img src={logoKenzie} alt="logo-kenzie-hamburgueria" />
                <div className="display-flex">
                <div className="display-none-mobile">
                    <InputSearch/>
                </div>
                <button onClick={openSearchMobile} type="button" className="search-btn display-none"><img src={searchIcon2} alt="search-button"/></button>
                <CartCounter/>
                <button onClick={logout} type="button" className="logout-btn"><img src={logoutIcon} alt="logout-icon" /></button>
                </div>
            </div>
            }
        </StyledHeader>
    )
}