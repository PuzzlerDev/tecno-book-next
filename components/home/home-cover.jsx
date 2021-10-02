import StyledImage from "../styled-image";
import NavLink from "../nav-link";

const HomeCover = ({ cover }) => {
  const { coverTitle, coverBody, coverLink, coverPicture } = cover;
  return (
    <section>
      <article className="container py-5">
        <div className="row justify-content-beetwen">
          <div className="col-12 col-lg-4 text-center text-lg-start">
            <h1>{coverTitle}</h1>
            <p className="my-4">{coverBody}</p>

            <NavLink href={coverLink.linkUrl} cta>
              {coverLink.linkTitle}
            </NavLink>
          </div>
          <div className="col-12 col-lg-7 py-4">
            <StyledImage
              src={coverPicture.url}
              alt={coverPicture.alternativeText}
              width={400}
              height={240}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomeCover;
