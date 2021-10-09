import StyledImage from "./styled-image";
import NavLink from "./nav-link";

const Footer = () => {
  return (
    <footer className="bg-dark row align-items-center justify-content-between px-4">
      <div className="col-2">
        <StyledImage 
          src='/powered-by-vercel.svg' 
          alt="Vercel Logo" 
          width={50} 
          height={50}
        />

        <StyledImage 
          src='/puzzlerdev-logo.png' 
          alt="PuzzlerDev Logo" 
          width={50} 
          height={50}
        />
      </div>
      <div className="col-auto">
        <p className="mx-2 text-white">
          <span>Reach me:</span>
        </p>
        <ul className="mx-2 text-white">
          <li>
            <NavLink href="/">GitHub</NavLink>
          </li>
          <li>
            <NavLink href="/">Twitter</NavLink>
          </li>
          <li>
            <NavLink href="/">Instagram</NavLink>
          </li>
          <li>
            <NavLink href="/">TikTok</NavLink>
          </li>
          <li>
            <NavLink href="/">Discord</NavLink>
          </li>
          <li>
            <NavLink href="/">Telegram</NavLink>
          </li>
          <li>
            <NavLink href="/">YouTube</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
