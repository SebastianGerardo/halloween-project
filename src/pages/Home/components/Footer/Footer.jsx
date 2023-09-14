//Assets
import logo from "../../../../assets/img/logo.png";
import footer1 from "../../../../assets/img/footer1-img.png";
import footer2 from "../../../../assets/img/footer2-img.png";
//Data
import { sliceData } from "./data";
//Styles
import "./footer.css";


export const Footer = () => (
  <footer className="tw-relative tw-overflow-hidden tw-pt-[4.5rem] tw-pr-0 tw-pb-8 tablet:tw-pt-[7rem] tablet:tw-pr-0 tablet:tw-pb-8">
    <div className="tw-grid tw-gap-y-8 tablet:tw-grid-cols-[1fr_1fr_1fr_1fr] tablet:tw-justify-center tablet:tw-gap-x-4 tw-max-w-[968px] tw-mx-6 max-[320px]:tw-mx-[1rem] large:tw-mx-auto">
      <div className="footer__content tablet:tw-mx-auto">
        <a href="#" className="tw-flex tw-items-center tw-gap-x-2 tw-mb-4 tw-font-medium tw-text-white">
          <img src={logo} alt="" className="tw-w-5" />
          Halloween
        </a>

        <p className="tw-mb-10">
          Enjoy the scariest night <br />
          of your life.
        </p>

        <div className="tw-flex tw-gap-x-3">
          <a
            href="https://www.facebook.com/profile.php?id=100090941623273"
            target="_blank"
            className="footer__social-bg tw-inline-flex tw-p-1 tw-rounded-[.25rem] tw-text-white tw-text-base"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/devguille/"
            target="_blank"
            className="footer__social-bg tw-inline-flex tw-p-1 tw-rounded-[.25rem] tw-text-white tw-text-base"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            className="footer__social-bg tw-inline-flex tw-p-1 tw-rounded-[.25rem] tw-text-white tw-text-base"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>

      {sliceData.map((opt, index) => (
        <div key={index} className="footer__content  tablet:tw-mx-auto">
          <h3 className="tw-text-base large:tw-text-[1.25rem] tw-mb-4 tw-font-semibold">{opt.title}</h3>

          <ul className="tw-grid tw-gap-y-[.35rem]">
            {opt.links && opt.links.length > 0 && opt.links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="tw-text-[.813rem] large:tw-text-[.875rem] tw-text-[#F3F2F2] tw-transition tw-duration-[.3s] hover:tw-text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) )}

    </div>

    <span className="tw-block tw-text-center tw-text-xs large:tw-text-[.813rem] large:tw-mt-[6rem] tw-mt-[4.5rem]">
      &#169; Halloween page by <a href="" className="tw-text-[#551a8b]">DevSolutionsa</a>{" "}
    </span>

    <img src={footer1} alt="" className="tw-absolute tw-transition tw-duration-[.3s] tw-w-[100px] 
                                         tw-top-24 -tw-right-8 hover:-tw-translate-y-2 desktop:tw-w-[120px]" />
    <img src={footer2} alt="" className="tw-absolute tw-transition tw-duration-[.3s] tw-w-[150px] 
                                         tw-bottom-16 tw-right-16 hover:-tw-translate-y-2 desktop:tw-w-[180px] 
                                         desktop:tw-top-[30%] desktop:-tw-left-[3%] tablet:tw-right-[initial] 
                                         tablet:tw-bottom-0 tablet:tw-left-[15%]" />
  </footer>
);
