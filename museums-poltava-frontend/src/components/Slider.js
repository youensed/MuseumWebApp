import { Carousel } from 'react-bootstrap';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqwqjLePilTeHgrR4WUUQx9IVRMyLF5XHb_h_ObCaf9G0zWZJfuTX9FaZmsBg4ICrJB642zxI2UNSHHmcGcwGsPdcHbBUpy2KJqzO3HctpL1lt1zH9z2I6pLrEu2muNFrQlvSms=s1360-w1360-h1020-rw"
          alt="Полтавський краєзнавчий музей"
        />
        <Carousel.Caption>
          <h5>Полтавський краєзнавчий музей</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mus.pl.ua/tour/wp-content/uploads/2021/06/76_big78.jpg"
          alt="Музей Гоголя"
        />
        <Carousel.Caption>
          <h5>Музей Гоголя</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/7/79/Kotlyarevsky-Museum_in_Poltava.jpg"
          alt="Музей-садиба Івана Котляревського"
        />
        <Carousel.Caption>
          <h5>Музей-садиба Івана Котляревського</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;