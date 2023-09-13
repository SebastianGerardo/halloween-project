import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { AcercaDe } from "./components/AcercaDe/AcercaDe";
import { Categorias } from "./components/Categorias/Categorias";
import { Descuentos } from "./components/Descuentos/Descuentos";
import { Footer } from "./components/Footer/Footer";
import { MenuInicial } from "./components/MenuInicial/MenuInicial";
import { NuevosItems } from "./components/NuevosItems/NuevosItems";
import { Suscribirse } from "./components/Suscribirse/Suscribirse";
import { TrucoTrato } from "./components/TrucoTrato/TrucoTrato";
import ScrollReveal from "scrollreveal";
import "./home.css";

export const Home = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const scrollUpHandler = () => {
      if (window.scrollY >= 460) setShowScrollUp(true);
      else setShowScrollUp(false);
    };

    window.addEventListener("scroll", scrollUpHandler);

    return () => {
      window.removeEventListener("scroll", scrollUpHandler);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const scrollActive = () => {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(`.nav__menu a[href*=${sectionId}]`)
            .classList.add("active-link");
        } else {
          document
            .querySelector(`.nav__menu a[href*=${sectionId}]`)
            .classList.remove("active-link");
        }
      });
    };

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
    });

    sr.reveal(`.home-swiper,.new-swiper, .newsletter__container`);
    sr.reveal(`.category__data, .trick__content, .footer__content`, {
      interval: 100,
    });
    sr.reveal(`.about__data, .discount__img`, { origin: "left" });
    sr.reveal(`.about__img, .discount__data`, { origin: "right" });
  }, []);

  return (
    <div>
      <Header />
      <main className="main">
        <MenuInicial />
        <Categorias />
        <AcercaDe />
        <TrucoTrato />
        <Descuentos />
        <NuevosItems />
        <Suscribirse />
      </main>
      <Footer />
      <a href="#" className={`scrollup ${showScrollUp && "show-scroll"}`}>
        <i className="bx bx-up-arrow-alt scrollup__icon"></i>
      </a>
    </div>
  );
};
