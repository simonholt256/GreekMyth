import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/context" className="nav-link">
        Context
      </NavLink>
      <NavLink to="/method" className="nav-link">
        Method
      </NavLink>
      <NavLink to="/sources" className="nav-link">
        Sources
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
    </nav>
  )
}

export default Navbar