import { useState } from "react";
//Data
import { sliceData } from "./data";
//Assets
import trick_treat5 from "../../assets/img/trick-treat5-img.png";
import nav_img from "../../assets/img/nav-img.png";
//Styles
import "./header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = () => {
    closeMenu();
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <img src={trick_treat5} alt="" className="nav__logo-img" />
          Halloween
        </a>
        <div className={`nav__menu ${isMenuOpen && "show-menu"}`}>
          <ul className="nav__list">
            {sliceData.map((opt, index) => (
              <li key={index} className="nav__item">
                <a
                  href={opt.href}
                  className={`nav__link ${
                    index == 0 && "active-link"
                  }`}
                  onClick={handleNavLinkClick}
                >
                  {opt.label}
                </a>
              </li>
            ))}
            <a href="#" className="button button--ghost">
              Soporte
            </a>
          </ul>
          <div className="nav__close" onClick={closeMenu}>
            <i className="bx bx-x"></i>
          </div>
          <img src={nav_img} alt="" className="nav__img" />
        </div>
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-grid-alt"}`}></i>
        </div>
      </nav>
    </header>
  );
};
