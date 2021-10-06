import StyledImage from "../styled-image";
import Styles from "../../styles/home-styles/home-reasons.module.css";

const HomeReasons = ({ reasons: data }) => {
  return data ? (
    <section className="container py-5 mt-5">
        <h2 className="text-center my-5">{data.reasonTitle}</h2>
        <div className="row justify-content-around">
          {data.reasons.map((item) => {
            const { id, reasonPicture, reasonInfo } = item;
            return (
              <div className="col-12 col-md-6 col-lg-4" key={id}>
                <figcaption className={Styles["reasons-card"]}>
                  <StyledImage
                    src={reasonPicture.url}
                    alt={reasonPicture.alternativeText}
                    width={40}
                    height={20}
                  />
                  <hr />
                  <p className={Styles["reasons-card-text"]}>{reasonInfo}</p>
                </figcaption>
              </div>
            );
          })}
        </div>
    </section>
  ) : null;
};

export default HomeReasons;
