import Link from "next/link";
import Styles from "../styles/Nav-link.module.css";

const NavLink = ({ href, children, cta, color = "white", bg = "black" }) => {
  return (
    <Link href={href} scroll={false}>
      <a className={Styles[cta ? `cta-item-${bg}` : `nav-item-${color}`]}>
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
