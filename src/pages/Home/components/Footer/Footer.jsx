import logo from '../../../../assets/img/logo.png'
import footer1 from '../../../../assets/img/footer1-img.png'
import footer2 from '../../../../assets/img/footer2-img.png'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer section">
      {/* <!--Pie de pagina--> */}
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo">
            <img src={logo} alt="" className="footer__logo-img" />
            Halloween
          </a>

          <p className="footer__description">
            Enjoy the scariest night <br />
            of your life.
          </p>

          <div className="footer__social">
            <a
              href="https://www.facebook.com/profile.php?id=100090941623273"
              target="_blank"
              className="footer__social-link"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/devguille/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="footer__social-link"
            >
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Nosotros</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                News
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Servicios</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Discounts
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Shipping mode
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">DevSolutionsa</h3>

          <ul className="footer__links">
            <li>
              <a href="#" className="footer__link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Nosotros us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Our mision
              </a>
            </li>
          </ul>
        </div>
      </div>

      <span className="footer__copy">
        &#169; Halloween page by <a href="">DevSolutionsa</a>{" "}
      </span>

      <img src={footer1} alt="" className="footer__img-one" />
      <img src={footer2} alt="" className="footer__img-two" />
    </footer>
  );
};
