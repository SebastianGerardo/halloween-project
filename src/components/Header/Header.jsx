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
    <header
      className="header tw-w-full tw-fixed tw-top-0 tw-left-0"
      id="header"
    >
      <nav className="nav container tw-flex tw-justify-between tw-items-center">
        <a
          href="#home"
          className="nav__logo tw-flex tw-items-center tw-gap-2.5"
        >
          <img src={trick_treat5} alt="" className="tw-w-5" />
          Halloween
        </a>
        <div className={`nav__menu ${isMenuOpen && "tw-top-0"}`}>
          <ul className="nav__list">
            {sliceData.map((opt, index) => (
              <li key={index} className="nav__item">
                <a
                  href={opt.href}
                  className={`nav__link tw-uppercase tw-font-black tw-transition tw-duration-[.4s] ${
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
          <div
            className="nav__close tw-text-[1.8rem] tw-absolute tw-top-2 tw-right-[.7rem] tw-cursor-pointer"
            onClick={closeMenu}
          >
            <i className="bx bx-x"></i>
          </div>
          <img
            src={nav_img}
            alt=""
            className="md:tw-hidden tw-w-[100px] tw-absolute tw-top-0 tw-left-0"
          />
        </div>
        <div
          className="nav__toggle tw-text-xl tw-cursor-pointer"
          onClick={toggleMenu}
        >
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-grid-alt"}`}></i>
        </div>
      </nav>
    </header>
  );
};
