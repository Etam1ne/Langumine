import cards from "../images/cards.svg";
import repeat from "../images/repeat.svg";
import arrowLeft from "../images/arrowLeft.svg";
import arrowRight from "../images/arrowRight.svg";
import { useState } from "react";

const Cards = () => {

    const [curentCard, setCurrentCard] = useState<number>(0);

    const nextCard = () => {
        setCurrentCard(curentCard + 1)
    }

    const previousCard = () => {
        setCurrentCard(curentCard - 1)
    }

    return (
        <div id="cardsMain">
            <div id="cardContainer">
                <h1>Pack name</h1>
                <div id="cardsType">
                    <div className="cardType">
                        <img src={cards} alt="All cards" />
                        <span>All</span>
                    </div>
                    <div className="cardType">
                        <img src={repeat} alt="Learning cards" />
                        <span>Learning</span>
                    </div>
                </div> 
                <div id="card">
                    <span>{curentCard + 1}</span>
                    <p>Word</p>
                    <div>
                        <button className="buttonClass" onClick={previousCard}>
                            <img src={arrowLeft} alt="Previous card" />
                        </button>
                        <button className="buttonClass" onClick={nextCard}>
                            <img src={arrowRight} alt="Next card" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;