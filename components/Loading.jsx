import Styles from "../styles/loading.module.css"

const Loading = () => {
    return(
        <div className={`${Styles['loading']} spinner-border`} role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    );
};


export default Loading;
