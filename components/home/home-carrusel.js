import Carrusel from "../carrusel";

const HomeCarrusel = ({data}) => {
    console.log(data)

    return data?(
        <section>
                <article className="container-lg py-5">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <Carrusel contens={data}/>
                        </div>
                    </div>
                </article>
        </section>
    ): null;
};

export default HomeCarrusel;