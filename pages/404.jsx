import Styles from "../styles/404.module.css";

const notFound = () => {
  return (
    // <section className="container-lg">
    //   <div className="row">
    //     <div className="col-12">
    //       <h1>Page not found</h1>
    //     </div>
    //   </div>
    // </section>
    <section id={`${Styles["notfound"]}`}>
      <div className={`${Styles["notfound"]}`}>
        <div className={`${Styles["notfound-404"]}`}>
          <h3>Oops! Page not found</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>we are sorry, but the page you requested was not found</h2>
      </div>
    </section>
  );
};

export default notFound;
