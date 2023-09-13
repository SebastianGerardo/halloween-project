//Assets
import discount from "../../../../assets/img/discount-img.png";
//Styles
import "./descuentos.css";

export const Descuentos = () => (
  <section className="section discount">
    <div className="discount__container container grid">
      <div className="discount__data">
        <h2 className="discount__title">
          50% de descuento <br />
          Sobre nuevos productos
        </h2>
        <a href="#" className="button">
          Ir a nuevo
        </a>
      </div>

      <img src={discount} alt="" className="discount__img" />
    </div>
  </section>
);
