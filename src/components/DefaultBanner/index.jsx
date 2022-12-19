import { StyledBanner } from "./style"
import logo from "../../assets/logo.svg"
import art from "../../assets/group-135.svg"
import bag from "../../assets/shopping-bag.svg"

export function DefaultBanner () {
    return (
        <StyledBanner>
            <img src={logo} alt="site-logo" />
            <div className="slogan-box display-flex justify-content-center align-item gap-30">
                <div className="display-flex justify-content-center align-item"> 
                    <img src={bag} alt="bag-icon" />
                </div>
                <p>A vida é como um sanduíche, é preciso recheá-la com os <span>melhores</span> ingredientes.</p>
            </div>
            <img src={art} alt="art-img" />
        </StyledBanner>
    )
}