import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavMenu() {
  return (
    <Navbar expand="lg" className="mb-0">
      <Container className='nav-menu'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">Головна</NavLink>
            <NavLink to="/about" className="nav-link">Про сайт</NavLink>
            <NavLink to="/gallery" className="nav-link">Галерея</NavLink>
            <NavLink to="/news" className="nav-link">Новини</NavLink>
            <NavLink to="/contact" className="nav-link">Контакти</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;