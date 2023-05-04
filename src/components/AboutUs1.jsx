import Carousel from "react-bootstrap/Carousel";

function AboutUS1() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://abrakadabra.fun/uploads/posts/2022-02/1644219426_1-abrakadabra-fun-p-oboi-iz-pinterest-dlya-aifona-estetika-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Найдите свежие идеи:</h3>
          <p>Эстетические фотографии</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.artfile.ru/3300x2248_871244_[www.ArtFile.ru].jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Найдите свежие идеи:</h3>
          <p>Идея блюд на ужин</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/o/r/ORcoast_BrendaJonesl.jpg?crop=0%2C231%2C4000%2C2200&wid=2000&hei=1100&scl=2.0"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Найдите свежие идеи:</h3>
          <p>Минимализм</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AboutUS1;
