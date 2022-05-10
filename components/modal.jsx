import { Modal } from "react-bootstrap";

const SearchModal = ({ show, setShow, children, totalBooks }) => {
  const { Title, Body, Header } = Modal;
  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Header closeButton>
          <Title className="text-center">Encontramos {totalBooks} libros que coinciden con su busqueda.</Title>
        </Header>
        <Body>{children}</Body>
      </Modal>
  )
}


export default SearchModal;
