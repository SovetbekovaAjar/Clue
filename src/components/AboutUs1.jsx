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
          src="https://phonoteka.org/uploads/posts/2022-09/1663760766_1-phonoteka-org-p-bezhevie-oboi-na-kompyuter-vkontakte-1.jpg"
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
