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
      let inputText = document.getElementById("texts").value;
      let addText = inputText + card.cardInfo.name + " ,";
      document.getElementById("texts").value = addText;
      let element = document.getElementById(card.cardInfo.name);
      element.classList.remove("uncheck");
      element.classList.add("check");
      setState(true);
    }

  }

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
