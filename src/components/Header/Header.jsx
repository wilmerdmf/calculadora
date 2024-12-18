import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-navbar-container">
        <ul className="header-list-container">
          <li>
            <NavLink className={({ isActive }) => (isActive ? "is-active" : null)} to="/VES">
              VES
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "is-active" : null)} to="/COP">
              COP
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "is-active" : null)} to="/PEN">
              PEN
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "is-active" : null)} to="/ARS">
              ARS
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "is-active" : null)} to="/ESP">
              ESP
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? "is-active" : null)} to="/">
              DIF
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
