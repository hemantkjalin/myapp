import { LetContact } from "../Letcontact";

export const IndustriesPage = () => {
  return (
    <>
      <section
        className="team-page services-details"
        style={{ marginBottom: "40px" }}
      >
        <div className="container">
          <div className="service-detail-hd">
            <h1>Industries</h1>
            <p>Home-Industries</p>
          </div>
        </div>
      </section>

      <section className="industries-worked">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="hd">Industries we have worked with:</h4>
            <p>
              An industry is a group of manufacturers or businesses that produce
              a particular kind of goods or services.
            </p>
          </div>
          <div className="industries-worked-data">
            <div>
              <img src="img/web-service.png" />
            </div>

            <div className="text-center px-5">
              <h4 className="hd"> Real estate </h4>
              <p className="mb-0">
                Real estate is defined as the land and any permanent structures,
                like a home, or improvements attached to the land, whether
                natural or man-made.
              </p>
            </div>

            <div className="text-center px-5">
              <h4 className="hd"> Tourism </h4>
              <p className="mb-0">
                Tourism, the act and process of spending time away from home in
                pursuit of recreation, relaxation, and pleasure, while making
                use of the commercial provision of services.
              </p>
            </div>

            <div>
              <img src="img/web-service.png" />
            </div>

            <div>
              <img src="img/web-service.png" />
            </div>

            <div className="text-center px-5">
              <h4 className="hd"> Security </h4>
              <p className="mb-0">
                Security is protection from, or resilience against, potential
                harm caused by others, by restraining the freedom of others to
                act
              </p>
            </div>

            <div className="text-center px-5">
              <h4 className="hd"> Oil and Energy </h4>
              <p className="mb-0">
                The oil and energy companies involved in the exploration and
                development of oil or gas reserves, oil and gas drilling, and
                refining.
              </p>
            </div>

            <div>
              <img src="img/web-service.png" />
            </div>

            <div>
              <img src="img/web-service.png" />
            </div>

            <div className="text-center px-5">
              <h4 className="hd"> Food and Grocery </h4>
              <p className="mb-0">
                Food And Grocery Retail Market is a store that sells food and
                other small household items including meat, fresh dairy
                products, bakery items, vegetables, fruits, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LetContact />
    </>
  );
};
