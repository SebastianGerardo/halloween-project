import { useEffect } from "react";
//@Swiper
import Swiper from "swiper";
import 'swiper/css/bundle';
//Data
import { slideData } from "./data";
//Styles
import "./menuInicial.css";

export const MenuInicial = () => {
  // Este useEffect se usa para ejecutar el swiper que es un scroll en horizontal
  useEffect(() => {
    new Swiper(".home-swiper", {
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className="home container" id="home">
      <div className="swiper home-swiper">
        <div className="swiper-wrapper">
          {/* Recorro la data existente para poder generar los datos estáticos */}
          {slideData.map((slide, index) => (
            <section className="swiper-slide" key={index}>
              <div className="home__content grid">
                <div className="home__group">
                  <img src={slide.image} alt="" className="home__img" />
                  <div className="home__indicator"></div>

                  <div className="home__details-img">
                    <h4 className="home__details-title">{slide.title}</h4>
                    <span className="home__details-subtitle">
                      {slide.subtitle}
                    </span>
                  </div>
                </div>

                <div className="home__data">
                  <h3 className="home__subtitle">
                    # {index + 1} {slide.title}
                  </h3>
                  <h1 className="home__title">
                    UOOOO <br />
                    TRUCO O <br />
                    TRATO!!
                  </h1>
                  <p className="home__description">{slide.description}</p>

                  <div className="home__buttons">
                    <a href={slide.buttonLink} className="button">
                      {slide.buttonText}
                    </a>
                    <a href="#" className="button--link button--flex">
                      Audio grabado
                      <i className="bx bx-right-arrow-alt button__icon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
