import category1 from '../../../../assets/img/category1-img.png'
import category2 from '../../../../assets/img/category2-img.png'
import category3 from '../../../../assets/img/category3-img.png'
import './categorias.css'

export const Categorias = () => {
  return (
    <section className="section category">
      {/* <!--Categorias--> */}
      <h2 className="section__title">
        Susto Favorito <br />
        Categorias
      </h2>

      <div className="category__container container grid">
        <div className="category__data">
          <img
            src={category1}
            alt=""
            className="category__img"
          />
          <h3 className="category__title">Fantasmas</h3>
          <p className="category__description">
            Choose the ghosts, the scariest there are.
          </p>
        </div>

        <div className="category__data">
          <img
            src={category2}
            alt=""
            className="category__img"
          />
          <h3 className="category__title">Calabazas</h3>
          <p className="category__description">
            You look at the scariest pumpkins there is.
          </p>
        </div>

        <div className="category__data">
          <img
            src={category3}
            alt=""
            className="category__img"
          />
          <h3 className="category__title">Sombrero de bruja</h3>
          <p className="category__description">
            Pick the most stylish witch hats out there.
          </p>
        </div>
      </div>
    </section>
  );
};
