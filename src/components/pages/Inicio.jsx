import Carousel from "react-bootstrap/Carousel";

const Inicio = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://equusio.vtexassets.com/assets/vtex.file-manager-graphql/images/3b8c99f8-9206-4f22-baf4-82ecad21c58b___807d3aba5f0b1e07638c4250176621da.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://via.placeholder.com/800x400/FF6B6B/ffffff?text=Slide+2"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="https://via.placeholder.com/800x400/FF6B6B/ffffff?text=Slide+3"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Inicio;
