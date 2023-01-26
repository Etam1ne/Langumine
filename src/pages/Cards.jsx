import cards from "../images/cards.svg";
import repeat from "../images/repeat.svg";
import arrowLeft from "../images/arrowLeft.svg";
import arrowRight from "../images/arrowRight.svg";

const Cards = () => {
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
                    <span>01/35</span>
                    <p>Word</p>
                    <div>
                        <button className="buttonClass"><img src={arrowLeft} alt="Previous card" /></button>
                        <button className="buttonClass"><img src={arrowRight} alt="Next card" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;