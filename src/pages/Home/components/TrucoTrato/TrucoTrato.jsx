import trick_treat1 from '../../../../assets/img/trick-treat1-img.png'
import trick_treat2 from '../../../../assets/img/trick-treat2-img.png'
import trick_treat3 from '../../../../assets/img/trick-treat3-img.png'
import trick_treat4 from '../../../../assets/img/trick-treat4-img.png'
import trick_treat5 from '../../../../assets/img/trick-treat5-img.png'
import trick_treat6 from '../../../../assets/img/trick-treat6-img.png'
import "./trucoTrato.css";

export const TrucoTrato = () => {
  return (
    <section className="section trick" id="trick">
      {/* <!--Truco o trato--> */}
      <h2 className="section__title">Truco o trato</h2>

      <div className="trick__container container grid">
        <div className="trick__content">
          <img
            src={trick_treat1}
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Toffee</h3>
          <span className="trick__subtitle">Candy</span>
          <span className="trick__price">$11.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon"></i>
          </button>
        </div>

        <div className="trick__content">
          <img
            src={trick_treat2}
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Bone</h3>
          <span className="trick__subtitle">Accessory</span>
          <span className="trick__price">$8.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon"></i>
          </button>
        </div>

        <div className="trick__content">
          <img
            src={trick_treat3}
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Scarecrow</h3>
          <span className="trick__subtitle">Accessory</span>
          <span className="trick__price">$15.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon"></i>
          </button>
        </div>

        <div className="trick__content">
          <img
            src={trick_treat4}
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Candy Cane</h3>
          <span className="trick__subtitle">Candy</span>
          <span className="trick__price">$7.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon"></i>
          </button>
        </div>

        <div className="trick__content">
          <img
            src={trick_treat5}
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Pumpkin</h3>
          <span className="trick__subtitle">Candy</span>
          <span className="trick__price">$19.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon"></i>
          </button>
        </div>

        <div className="trick__content">
          <img
            src={trick_treat6}
            alt=""
            className="trick__img"
          />
          <h3 className="trick__title">Ghost</h3>
          <span className="trick__subtitle">Accessory</span>
          <span className="trick__price">$17.99</span>
          <button className="button trick__button">
            <i className="bx bx-cart-alt trick__icon"></i>
          </button>
        </div>
      </div>
    </section>
  );
};
