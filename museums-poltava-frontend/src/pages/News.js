import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/api/news')
      .then(res => setNews(res.data.slice(0, 10)))
      .catch(err => console.error(err));
  }, []);
   console.log(process.env.REACT_APP_API_URL)
  return (
    <section id="news" className="py-5 bg-light">
      <Container className='def-txt'>
        <h2 className='news-title'>Новини</h2>
        <Row>
          {news.length ? news.map(item => (
            <Col md={6} lg={4} key={item._id} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title><b>{item.title}</b></Card.Title>
                  <Card.Text>{item.content.substring(0, 100)}...</Card.Text>
                  <Card.Text>
                    <small className="text-muted">{new Date(item.date).toLocaleDateString('uk-UA')}</small>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )) : <p>Новини завантажуються...</p>}
        </Row>
      </Container> 
    </section>
  );
}

export default News;