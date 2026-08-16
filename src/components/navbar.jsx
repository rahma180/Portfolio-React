import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <header className="head">
            <nav className="navbar">
                <h2 className="title">Rahma</h2>
                <ul className="nav-menu">
                    <li>
                        <NavLink to="/" className={({isActive}) => (isActive ? 'active' : "") } >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => (isActive ? 'active' : "")}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" className={({isActive}) => (isActive ? 'active' : "")}>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projek" className={({isActive}) => (isActive ? 'active' : "")}>projek</NavLink>
                    </li>
                    <li>
                        <NavLink to="/kontak" className={({isActive}) => (isActive ? 'active' : "")}>Kontak</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar