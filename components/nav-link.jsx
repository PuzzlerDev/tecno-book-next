import Link from "next/link";
import Styles from "../styles/nav-link.module.css";

const NavLink = ({
  href,
  children,
  cta,
  color = "white",
  bg = "black",
  targetBlank = false,
}) => {
  return (
    <Link href={href} scroll={false}>
      <a
        className={Styles[cta ? `cta-item-${bg}` : `nav-item-${color}`]}
        target={targetBlank && "_blank"}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
