import "./Carousel.css";
import Flickity from "flickity";
import { useEffect, useState } from "react";
import CarouselCard from "../../components/CarouselCard/CarouselCard.js";
import "../../../src/flicker.css";

const Carousel = () => {
  let Flik;
  const [details, setDetails] = useState([]);

  const showData = () => {
    let cardInfo = [
      {
        class: "JavaLogo",
        name: "Java",
        hash: "#Js",
      },

      {
        class: "PhpLogo",
        name: "PHP",
        hash: "#Php",
      },
      {
        class: "PythonLogo",
        name: "Python",
        hash: "#Python",
      },
      {
        class: "CLogo",
        name: "C#",
        hash: "#Csharp",
      },
    ];

    setDetails(cardInfo);
  };

  useEffect(() => {
    showData();
    setTimeout(() => {
      let elem = document.querySelector("#carru");

      Flik = new Flickity(elem, {
        cellAlign: "left",
        freeScroll: true,
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        on: {
          dragStart: () => {
            console.log("dragStart");
            elem.style.pointerEvents = "none";
          },
          dragEnd: () => {
            elem.style.pointerEvents = "all";
          },
        },
      });
    }, 100);
  }, []);

  return (
    <div class="carrusel gallery" id="carru">
      {details.map((cardInfo) => {
        return <CarouselCard cardInfo={cardInfo} />;
      })}
    </div>
  );
};

export default Carousel;
