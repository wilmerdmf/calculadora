import { NavLink } from "react-router-dom";
import { NAV_ROUTES } from "../../constants";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="header-navbar-container" aria-label="Main navigation">
        <ul className="header-list-container">
          {NAV_ROUTES.map(({ key, path }) => (
            <li key={key}>
              <NavLink to={path} className={({ isActive }) => (isActive ? "is-active" : "")}>
                {key}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
