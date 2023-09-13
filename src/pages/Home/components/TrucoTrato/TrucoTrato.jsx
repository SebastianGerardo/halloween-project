//Data
import { sliceData } from "./data";
//Styles
import "./trucoTrato.css";

export const TrucoTrato = () => (
  <section className="section trick" id="trick">
    <h2 className="section__title">Truco o trato</h2>

    <div className="trick__container container grid">
      {/* Recorro la data existente para poder generar los datos estáticos */}
      {sliceData.map((opt, index) => (
        <div key={index} className="trick__content">
          <img src={opt.img} alt={opt.title} className="trick__img" />
          <h3 className="trick__title">{opt.title}</h3>
          <span className="trick__subtitle">{opt.subtitle}</span>
          <span className="trick__price">${opt.price}</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon"></i>
          </button>
        </div>
      ))}
    </div>
  </section>
);
