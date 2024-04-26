import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/food">Food</NavLink></li>
                <li><NavLink to="/yellow">Yellow</NavLink></li>
                <li><NavLink to="/chickens">Chickens</NavLink></li>
            </ul>
        </nav>
    )
};

export default Nav;