import NavLink from "./nav-link";
// import Styles from "../styles/nav.css";

const Nav = ({ nav }) => {
  return nav?.id ? (
    <header className="navbar navbar-dark bg-dark row align-items-center px-4">
      <nav className="col-auto">
        {nav.body.map((item) => {
          const { linkTitle, linkUrl, id } = item;
          return (
            <NavLink href={linkUrl} className="mx-2 text-white" key={id}>
              {linkTitle}
            </NavLink>
          );
        })}
      </nav>
      <div className="col-auto">
        <input type="text" placeholder="Busca un libro..." role="search" />
      </div>
    </header>
  ) : null;
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
