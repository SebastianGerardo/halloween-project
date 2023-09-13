//Styles
import "./suscribirse.css";

export const Suscribirse = () => (
  <section className="tw-pt-[4.5rem] tw-pr-0 tw-pb-8 tablet:tw-pt-[7rem] tablet:tw-pr-0 tablet:tw-pb-8">
    <div
      className="newsletter__container medium:tw-grid medium:tw-grid-cols-[.7fr] medium:tw-justify-center
                    tablet:tw-grid-cols-[.5fr] tw-max-w-[968px] tw-mx-6 max-[320px]:tw-mx-[1rem] large:tw-mx-auto"
    >
      <h2 className="large:tw-text-[2.25rem] tw-font-semibold large:tw-mb-12 tw-text-[1.25rem] tw-mb-8 tw-text-center">
        Newsletter
      </h2>
      <p className="tw-text-center tw-mb-6 medium:tw-py-0 medium:tw-px-12">
        Promotion new products and sales. Directly to your inbox
      </p>

      <form
        action=""
        className="newsletter__form-bg tw-p-4 tw-flex tw-justify-between tw-rounded-xl"
      >
        <input
          type="text"
          placeholder="Enter your email"
          className="tw-w-[70%] tw-bg-transparent tw-text-white"
        />
        <button
          className="tw-inline-block tw-bg-[#F4511F] hover:tw-bg-[#F4420B] tw-text-white tw-py-4 tw-px-[1.75rem] 
                           tw-rounded-lg tw-font-medium tw-transition tw-duration-[.3s]"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);
