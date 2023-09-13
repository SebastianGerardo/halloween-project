//Data
import { sliceData } from "./data";
//Styles
import "./categorias.css";

export const Categorias = () => (
  <section className="section category">
    <h2 className="section__title">
      Susto Favorito <br />
      Categorias
    </h2>

    <div className="category__container container grid">
      {/* Recorro la data existente para poder generar los datos estáticos */}
      {sliceData.map((opt, index) => (
        <div key={index} className="category__data">
          <img src={opt.image} alt={opt.title} className="category__img" />
          <h3 className="category__title">{opt.title}</h3>
          <p className="category__description">{opt.description}</p>
        </div>
      ))}
    </div>
  </section>
);
