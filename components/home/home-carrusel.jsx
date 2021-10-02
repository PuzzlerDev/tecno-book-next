import Carrusel from "../Carrusel";

const HomeCarrusel = ({ carrusel }) => {
  return carrusel ? (
    <section className="container-lg py-2 pb-5">
      <h2 className="text-center mb-3">{carrusel.carruselTitle}</h2>
      <div className="row justify-content-center">
        <div className="col-12">
          <Carrusel contens={carrusel} />
        </div>
      </div>
    </section>
  ) : null;
};

export default HomeCarrusel;
