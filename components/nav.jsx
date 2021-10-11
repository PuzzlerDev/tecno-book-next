import NavLink from "./nav-link";
import Styles from "../styles/nav.module.css";

const Nav = () => {
  return (
    <header className="navbar navbar-dark bg-dark row align-items-center px-4">
      <nav className="col-auto">
        <ul className={`${Styles['nav-ul']} row`}>
          <li className="col-auto">
            <NavLink href="/" className="text-white">
              INICIO
            </NavLink>
          </li>
          <li className="col">
            <NavLink href="/categories" className="text-white">
              CATEGORIAS
            </NavLink>
          </li>
          <li className="col">
            <NavLink href="/" className="text-white">
              CONTRIBUIR
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="col-auto">
        <input type="text" placeholder="Search a book..." role="search" />
      </div>
    </header>
  );
};

/*
const Header = styled.header`
    display: none;
    ${mq.md}{
        padding: 1.5rem;
        background-color: ${colors.brown};
        padding: 1rem;
        display: flex;
    }
`;

/*
const InputBox = styled.div`
    margin-left: auto;
    margin-right: 0%;

    input{
        border-radius: 1rem;
        padding: 0 0.6rem;
        height: 2rem;
        width: 13.5rem;
        border: 0;
    }
`;
*/
export default Nav;
