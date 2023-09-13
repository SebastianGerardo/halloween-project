import { useEffect } from "react";
//@Swiper
import Swiper from "swiper";
//Data
import { slideData } from "./data";
//Styles
import "./nuevosItems.css";

export const NuevosItems = () => {
  
  // Este useEffect se usa para ejecutar el swiper que es un scroll en horizontal
  useEffect(() => {
    new Swiper(".new-swiper", {
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      spaceBetween: 16,
    });
  }, []);

  return (
    <section className="section new" id="new">
      <h2 className="section__title">Los recién llegados</h2>

      <div className="new__container container">
        <div className="swiper new-swiper">
          <div className="swiper-wrapper">
            {/* Recorro la data existente para poder generar los datos estáticos */}
            {slideData.map((slide, index) => (
              <div className="new__content swiper-slide" key={index}>
                <div className="new__tag">{slide.tag}</div>
                <img src={slide.image} alt="" className="new__img" />
                <h3 className="new__title">{slide.title}</h3>
                <span className="new__subtitle">{slide.subtitle}</span>

                <div className="new__prices">
                  <span className="new__price">{slide.price}</span>
                  <span className="new__discount">{slide.discount}</span>
                </div>

                <button className="button new__button">
                  <i className="bx bx-cart-alt new__icon"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
