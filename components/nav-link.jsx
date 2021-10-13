import Link from "next/link";
import Styles from "../styles/nav-link.module.css";

const NavLink = ({
  href,
  children,
  cta,
  color,
  bg,
  className,
  target,
}) => {
  return (
    <Link href={href} scroll={false}>
      <a
        className={`
          ${className} 
          ${Styles[cta ? `cta-item-${bg}` : `nav-item-${color}`]}
        `}
        target={target}
      >
        {children}
      </a>
    </Link>
  );
};

NavLink.defaultProps = {
  color: "white",
  bg: "black",
  target: "_self"
};

export default NavLink;
