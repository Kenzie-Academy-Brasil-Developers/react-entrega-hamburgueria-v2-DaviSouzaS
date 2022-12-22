import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledInputSearch } from "./style"
import { Button } from "../Button"
import searchIcon from "../../assets/search-icon.svg"


export function InputSearch () {

    const { search, setSearch } = useContext(UserContext);

    return ( 
        <StyledInputSearch className="search-input display-flex justify-content-between align-item">
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Digitar Pesquisa"/>
            <Button type={"submit"} name={<img src={searchIcon} alt="search-icon"/>}/>
        </StyledInputSearch>
    )
}