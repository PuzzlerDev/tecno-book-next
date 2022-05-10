import StyledImage from "./styled-image";
import NavLink from "./nav-link";
import "../styles/components/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faInstagram, faTelegram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark row align-items-center px-4 justify-content-between">
      <Col xs="12" sm="6" lg="3" xxl="2" className="footer-item">
      <NavLink href="/#home">
        <StyledImage
          src="/puzzlerdev-logo.png"
          alt="PuzzlerDev Logo"
          width={64}
          height={64}
        />
      </NavLink>
      <NavLink target="_blank" href="https://vercel.com/">
        <StyledImage
          src="/powered-by-vercel.svg"
          alt="Vercel Logo"
          width={64}
          height={16}
        />

      </NavLink>
      </Col>
      <Col xs="12" sm="6" xl="4" className="footer-item mx-auto mt-4">
        <Row className="mx-auto text-white list-unstyled" as="ul">
          <Col as="li" xs="3"  md="2" lg="2" className="mb-3">
            <NavLink href="https://github.com/PuzzlerDev">
            <FontAwesomeIcon className="fa-2x" icon={faGithub} />
            </NavLink>
          </Col>
          <Col as="li" xs="3"  md="2" lg="2" className="mb-3">
            <NavLink href="https://www.instagram.com/puzzlerdev">
            <FontAwesomeIcon className="fa-2x" icon={faInstagram} />
            </NavLink>
          </Col>
          <Col as="li" xs="3"  md="2" lg="2">
            <NavLink href="https://tiktok.com/@puzzlerdev">
            <FontAwesomeIcon className="fa-2x" icon={faTiktok} />
            </NavLink>
          </Col>
          <Col as="li" xs="3"  md="2" lg="2">
            <NavLink href="https://discord.gg/fyGx7BZ">
              <FontAwesomeIcon className="fa-2x" icon={faDiscord} />
            </NavLink>
          </Col>
          <Col as="li" xs="3"  md="2" lg="2">
            <NavLink href="https://t.me/puzzlerdev">
            <FontAwesomeIcon className="fa-2x" icon={faTelegram} />
            </NavLink>
          </Col>
        </Row>
      </Col>
    </footer>
  );
};

export default Footer;
