import NavLink from "../Nav-link";
import StyledImage from "../Styled-image";
import Styles from "../../styles/home-styles/Home-donate.module.css";

const HomeDonate = ({donate}) => {
    return donate?(
        <section className={`container py-5 ${Styles["section-decoration"]}`}>
            <div className="row justify-content-center align-items-center">
                <div className={`col-12 col-md-6 z-2 ${Styles["z-col"]}`}>
                    <StyledImage 
                        src={donate.donatePicture.url}
                        width={400}
                        height={200} 
                    />
                </div>
                <div className={`col-12 col-md-6 ${Styles["z-col"]}`}>
                    <h2>{donate.donateTitle}</h2>
                    <p className="mb-4">{donate.donateInfo}</p>
                    <NavLink 
                      href={donate.donateUrl} 
                      cta
                      bg="green"
                      >APOYANOS $
                    </NavLink>
                </div>
            </div>
        </section>
    ): null;
};


export default HomeDonate;