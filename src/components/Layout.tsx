import { Outlet, Link } from "react-router-dom";
import { StyledNavbar } from "./styles/Navbar.styled";
import logo from "../images/logo.svg"

export const Layout: React.FC = () => {
    return (
      <>
        <StyledNavbar>
            <ul>
                <li>
                    <Link to="/"><img src={logo} alt="Logo (minimalistic globe)" /></Link>
                </li>
                <li>
                    <Link to="cards">Cards</Link>
                </li>
                <li>
                    <Link to="import">Import</Link>
                </li>
            </ul>
        </StyledNavbar>

        <Outlet />
      </>  
    );
}