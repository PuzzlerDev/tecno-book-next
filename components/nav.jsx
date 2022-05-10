import NavLink from "./nav-link";
import Styles from "../styles/nav.module.css";
import {InputGroup, Button, FormControl, Row, Col } from "react-bootstrap";

const Nav = () => {
  return (
    <Row className="navbar navbar-dark bg-dark align-items-center px-4" as="header">
      <Col xs="12" md="6" as="nav">
        <Row className={`${Styles["nav-ul"]}`} as="ul">
          <Col className={`${Styles["nav-li"]}`} md="auto" as="li">
            <NavLink href="/" className="text-white">
              INICIO
            </NavLink>
          </Col>
          <Col className={`${Styles["nav-li"]}`} md="auto" as="li">
            <NavLink href="/categories" className="text-white">
              CATEGORIAS
            </NavLink>
          </Col>
          <Col className={`${Styles["nav-li"]}`} md="auto" as="li">
            <NavLink href="/" className="text-white">
              CONTRIBUIR
            </NavLink>
          </Col>
        </Row>
      </Col>
      <Col xs="auto" className={`mt-3 ${Styles["nav-col-search"]}`}>
        <InputGroup className="mb-3">
          <Button variant="dark" id="button-addon1">
            Search
          </Button>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="Buscar Libro..."
          />
        </InputGroup>
      </Col>
    </Row>
  );
};


export default Nav;
