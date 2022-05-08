import "./CarouselCard.css";
import { useState, useEffect } from "react";

const CarouselCard = (card) => {

  const [state, setState] = useState([]);

  useEffect(() => {
    setState(false);
  }, []);

  function handleClick(e) {
    e.preventDefault();
    if (state == false) {
      console.log(card.cardInfo.name);
      let inputTest = document.getElementById("texts").value;
      inputTest = inputTest + card.cardInfo.name + " ,";
      document.getElementById("texts").value = inputTest;
      var element = document.getElementById(card.cardInfo.name);
      element.classList.remove("uncheck");
      element.classList.add("check");
      setState(true);
    };
  };

  return (
    <div class="JS">
      <div className={card.cardInfo.class}></div>

      <div class="description">
        <p class="name">{card.cardInfo.name}</p>
        <p class="hash">{card.cardInfo.hash}</p>
        <span id={card.cardInfo.name} class="uncheck" onClick={handleClick}>
          <span
            class="iconify"
            style={{ fontSize: "26px" }}
            data-icon="akar-icons:circle-check"
          ></span>
        </span>
      </div>
    </div>
  );
};

export default CarouselCard;
