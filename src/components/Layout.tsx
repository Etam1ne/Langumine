import { Outlet, Link } from "react-router-dom";

import logo from "../images/logo.svg"

const Layout = () => {
    return (
      <>
        <nav>
            <ul>
                <li>
                    <Link to="/"><img id="logo" src={logo} alt="Logo (minimalistic globe)" /></Link>
                </li>
                <li>
                    <Link to="cards">Cards</Link>
                </li>
                <li>
                    <Link to="import">Import</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
      </>  
    );
}

export default Layout;