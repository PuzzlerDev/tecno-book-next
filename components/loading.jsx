import Spinner from "react-bootstrap/Spinner";
import Styles from "../styles/loading.module.css";

const Loading = () => {
  return (
    <Spinner animation="border" className={Styles["loading"]} role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

export default Loading;
