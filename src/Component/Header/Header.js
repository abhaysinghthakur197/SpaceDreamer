import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar.js";


const Header = () => {
    return (
        <BrowserRouter>
        <Navbar />
        </BrowserRouter>
    )
}

export default Header;