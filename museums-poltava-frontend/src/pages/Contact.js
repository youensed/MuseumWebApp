import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <section id="contacts" className="py-5">
      <Container>
        <h2>Контакти</h2>
        <Row>
          <Col md={6}>
            <p>Email: info@museums.poltava.ua</p>
            <p>Телефон: +380 (532) 123-45-67</p>
            <p>Адреса: вул. Музейна, 1, Полтава, Україна</p>
          </Col>
          <Col md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.678!2d34.551!3d49.588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDM1JzE2LjgiTiAzNMKwMzMnMDQuMCJF!5e0!3m2!1suk!2sua!4v1635781234567"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;