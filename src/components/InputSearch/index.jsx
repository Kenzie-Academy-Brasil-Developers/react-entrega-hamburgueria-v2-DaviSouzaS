import { StyledInputSearch } from "./style"
import searchIcon from "../../assets/search-icon.svg"

export function InputSearch () {
    return ( 
        <StyledInputSearch className="display-flex justify-content-between align-item">
            <input type="text" placeholder="Digitar Pesquisa"/>
            <button className="search-btn" type="submit"><img src={searchIcon} alt="search-icon" /></button>
        </StyledInputSearch>
    )
}