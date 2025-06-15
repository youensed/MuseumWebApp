import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Gallery() {
  const [images, setImages] = useState([]);
  console.log(process.env.REACT_APP_API_URL);
  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/api/images')
      .then(res => setImages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="gallery" className="py-5 bg-light">
      <Container>
        <h2>Галерея</h2>
        <Row>
          {images.map((img, i) => (
            <Col md={4} sm={6} key={i} className="mb-4">
              <img src={img.url} className="img-fluid rounded" alt={img.caption} style={{ width: '100%', height: '250px', objectFit: 'cover' }}/>
              <p className="text-center mt-2">{img.caption}</p>
              
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;