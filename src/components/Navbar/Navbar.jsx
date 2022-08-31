import "./navbar.scss";
import menuIcon from "../../images/menuH.svg";
import { useState } from "react";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
  };

  const menuItems = [
    {
      id: 1,
      menu: "home",
      link: "/",
    },
    {
      id: 2,
      menu: "about",
      link: "/about",
    },
    {
      id: 3,
      menu: "blog",
      link: "/blog",
    },
    {
      id: 4,
      menu: "contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="container navbar__container">
          <a href="/" className="navbar__logo">
            Logo
          </a>
          <div
            className={
              menuActive ? "navbar__menu navbar__menu--show" : "navbar__menu"
            }
          >
            {menuItems.map((menuItems) => {
              return (
                <a
                  key={menuItems.id}
                  className="navbar__menu-link"
                  href={menuItems.link}
                >
                  {menuItems.menu}
                </a>
              );
            })}
          </div>
          <button onClick={showMenu} className="navbar__toggle">
            <img src={menuIcon} alt="" />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
