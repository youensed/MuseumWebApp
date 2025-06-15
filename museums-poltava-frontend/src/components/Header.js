import { Container } from 'react-bootstrap';

function Header() {
  return (
    <header className="py-3">
      <Container className="d-flex align-items-center justify-content-between flex-wrap">
        <div className="d-flex align-items-center">
          <img src="https://i.ibb.co/r2dqQz4L/museums.png" alt="Logo" className="me-3" />
          <h1 className="h4 mb-0">Музеї Полтавщини</h1>
        </div>
        <div className="social-links">
          <a href="#" className="text-white me-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-white">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
      </Container>
    </header>
  );
}

export default Header;