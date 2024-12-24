import React,{ useState }from 'react';
import './Navbar.css';
import { useLocation } from 'react-router-dom';
import hamburger from '../Assets/burger-menu.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const noHamburgerPaths = ['/', '/login', '/register'];

    const showMenuItems = () => {
        return (
            <div className="menu-wrapper">
                <div className="menu">
                    <a href="/profile">Profile</a>
                    <a href="/logout">Logout</a>
                </div>
            </div>
        );
    }

    return (
        <nav className='navbar'>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/create">Create</a>
            </div>
            {!noHamburgerPaths.includes(location.pathname) && (
            <div className="hamburger-menu">
                <input 
                    type="checkbox"
                    checked={menuOpen}
                    onChange={() => setMenuOpen(!menuOpen)}
                    id="menu-toggle" />
                <label htmlFor="menu-toggle" className="menu-icon">
                    <span className="navicon">
                        <img src={hamburger} alt="menu" height={25} width={25} />
                    </span>
                </label>
                {menuOpen && showMenuItems()}
            </div>
            )}
        </nav>
    );
};

export default Navbar;