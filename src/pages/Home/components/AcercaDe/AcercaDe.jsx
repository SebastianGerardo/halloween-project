import './acercaDe.css'

export const AcercaDe = () => {
  return (
    <section className="section Nosotros" id="Nosotros">
      {/* <!--Acerca de--> */}
      <div className="Nosotros__container container grid">
        <div className="Nosotros__data">
          <h2 className="section__title Nosotros__title">
            Acerca de Halloween
            <br />
            Night
          </h2>
          <p className="Nosotros__description">
            Night of all the saints, or all the dead, is celebrated on October
            31 and it is a very fun international celebration, this celebration
            comes from ancient origins, and is already celebrated by everyone.
          </p>
          <a href="#" className="button">
            {" "}
            Saber más
          </a>
        </div>

      </div>
    </section>
  );
};
