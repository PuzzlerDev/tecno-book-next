import NavLink from "../Nav-link";
import StyledImage from "../Styled-image";

const HomeDonate = ({donate}) => {
    return donate?(
        <section className="container py-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-md-6 z-index-2">
                    <StyledImage 
                        src={donate.donatePicture.url}
                        width={400}
                        height={200} 
                    />
                </div>
                <div className="col-12 col-md-6">
                    <h2>{donate.donateTitle}</h2>
                    <p className="mb-4">{donate.donateInfo}</p>
                    <NavLink href={donate.donateUrl} cta>APOYANOS $</NavLink>
                </div>
            </div>
        </section>
    ): null;
};


export default HomeDonate;