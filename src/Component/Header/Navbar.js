import Logo from '../Images/Logo.png';
import { Link, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import '../../index.css';


function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="SpaceDreamer logo" />
                    </Link>
                </div>
                <div>
                    <nav>
                        <ul className='nav-list'>
                            <li>
                                <Link to="/" className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='link'>About</Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>


        </div>
    )
}



export default Navbar ;