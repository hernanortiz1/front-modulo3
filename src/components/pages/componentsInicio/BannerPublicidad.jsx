import Carousel from 'react-bootstrap/Carousel';

const BannerPublicidad = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src='https://www.macowens.com.ar/media/wysiwyg/CREDICOOP_recu_banner.jpg' />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src='https://www.macowens.com.ar/media/wysiwyg/CREDICOOP_recu_banner.jpg' />
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://www.macowens.com.ar/media/wysiwyg/CREDICOOP_recu_banner.jpg' />
      </Carousel.Item>
    </Carousel>
  );
};

export default BannerPublicidad;
