import Link from 'next/link';
import Styles from "../styles/nav-link.module.css"

const NavLink = ({href,children,className,cta}) => {
    
    return(
        <Link href={href} scroll={false}>
            <a className={Styles[cta? "cta-item":"nav-item"]}>{children}</a>
        </Link>
    );
};


export default NavLink;
