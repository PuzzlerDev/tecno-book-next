import StyledImage from "../Styled-image";
import NavLink from "../Nav-link";
import Styles from "../../styles/categories-styles/Categories-content.module.css";

const CategoriesContent = ({categories}) => {
    const contents = Object.values(categories);

    return contents.length ? (
        <section>
            <article className="container pb-5">
                <div className="row justify-content-center">
                    {contents.map(item => {
                        const {categoryPicture,categoryTitle,id} = item;
                        return(
                            <figure key={id} className="col-12 col-sm-6 col-lg-4 text-center">
                                <NavLink href={`/categories/${id}`}>
                                    <StyledImage 
                                        src={categoryPicture.url} 
                                        alt={categoryPicture.alternativeText} 
                                    />
                                    <figcaption className={Styles["card-name"]}>
                                        {categoryTitle}
                                    </figcaption>
                                </NavLink>
                            </figure>
                        )
                    })}
                </div>
            </article>
            <svg 
                height="100%" 
                width="100%" 
                id="svg" 
                viewBox="0 0 1440 600" 
                xmlns="http://www.w3.org/2000/svg" 
                className="transition duration-300 ease-in-out delay-150">
                <path d="M 0,600 C 0,600 0,200 0,200 C 94.20095693779905,179.56937799043064 188.4019138755981,159.13875598086128 296,170 C 403.5980861244019,180.86124401913872 524.5933014354066,223.01435406698562 622,247 C 719.4066985645934,270.9856459330144 793.2248803827753,276.80382775119614 870,268 C 946.7751196172247,259.19617224880386 1026.5071770334928,235.77033492822966 1122,222 C 1217.4928229665072,208.22966507177034 1328.7464114832537,204.11483253588517 1440,200 C 1440,200 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="#80725388" className="transition-all duration-300 ease-in-out delay-150"></path><path d="M 0,600 C 0,600 0,400 0,400 C 65.64593301435409,368.62200956937795 131.29186602870817,337.24401913875596 234,334 C 336.70813397129183,330.75598086124404 476.47846889952154,355.6459330143541 575,366 C 673.5215311004785,376.3540669856459 730.7942583732057,372.17224880382776 814,365 C 897.2057416267943,357.82775119617224 1006.3444976076555,347.6650717703349 1115,353 C 1223.6555023923445,358.3349282296651 1331.8277511961724,379.16746411483257 1440,400 C 1440,400 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="#807253ff" className="transition-all duration-300 ease-in-out delay-150">
                </path>
            </svg>
        </section>
    ): <h1>LOADING</h1>    
};

export default CategoriesContent;
