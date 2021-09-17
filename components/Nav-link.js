import Link from "next/link";
import Styles from "../styles/Nav-link.module.css"

const NavLink = ({href,children,cta}) => {
    return(
        <Link href={href} scroll={false}>
            <a className={Styles[cta? "cta-item":"nav-item"]}>{children}</a>
        </Link>
    );
};


export default NavLink;
