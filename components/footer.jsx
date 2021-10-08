import StyledImage from "./styled-image";
import NavLink from "./nav-link";
import "../styles/components/footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-dark row align-items-center justify-content-between px-4">
      <div className="col-2 footer-item">
        <StyledImage
          src="/puzzlerdev-logo.png"
          alt="Vercel Logo"
          width={50}
          height={50}
        />

        <StyledImage
          src="/powered-by-vercel.svg"
          alt="Vercel Logo"
          width={50}
          height={50}
        />
      </div>
      <div className="col-auto footer-item">
        <p className="mx-2 text-white">Reach me</p>
        <ul className="mx-2 text-white">
          <li>
            <NavLink targetBlank href="https://github.com/PuzzlerDev">
              GitHub
            </NavLink>
          </li>
          <li>
            <NavLink targetBlank href="https://www.instagram.com/puzzlerdev">
              Twitter
            </NavLink>
          </li>
          <li>
            <NavLink targetBlank href="https://www.instagram.com/puzzlerdev">
              Instagram
            </NavLink>
          </li>
          <li>
            <NavLink targetBlank href="https://tiktok.com/@puzzlerdev">
              TikTok
            </NavLink>
          </li>
          <li>
            <NavLink targetBlank href="https://discord.gg/fyGx7BZ">
              Discord
            </NavLink>
          </li>
          <li>
            <NavLink targetBlank href="https://t.me/puzzlerdev">
              Telegram
            </NavLink>
          </li>
          <li>
            <NavLink
              targetBlank
              href="https://www.youtube.com/channel/UCMsGIPLBFLGC2kuh-8QIA2Q"
            >
              YouTube
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
