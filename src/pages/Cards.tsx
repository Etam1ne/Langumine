import { useState } from "react";
import { StyledButton } from "../components/styles/Button.style"
import { MainContainer, CardContainer, CardTypesContainer, CardType, Card } from "../components/styles/Cards.style";
import cards from "../images/cards.svg";
import repeat from "../images/repeat.svg";
import arrowLeft from "../images/arrowLeft.svg";
import arrowRight from "../images/arrowRight.svg";

const Cards = () => {

    const [curentCard, setCurrentCard] = useState<number>(0);

    const nextCard = () => {
        setCurrentCard(curentCard + 1)
    }

    const previousCard = () => {
        setCurrentCard(curentCard - 1)
    }

    return (
        <MainContainer>
            <CardContainer>
                <h1>Pack name</h1>
                <CardTypesContainer>
                    <CardType>
                        <img
                            src={cards} 
                            alt="All cards" 
                        />
                        <span>All</span>
                    </CardType>
                    <CardType>
                        <img
                            src={repeat} 
                            alt="Learning cards" 
                        />
                        <span>Learning</span>
                    </CardType>
                </CardTypesContainer> 
                <Card>
                    <span>{curentCard + 1}</span>
                    <p>Word</p>
                    <div>
                        <StyledButton className="buttonClass" onClick={previousCard}>
                            <img
                                src={arrowLeft} 
                                alt="Previous card" 
                            />
                        </StyledButton>
                        <StyledButton className="buttonClass" onClick={nextCard}>
                            <img
                                src={arrowRight} 
                                alt="Mext card" 
                            />
                        </StyledButton>
                    </div>
                </Card>
            </CardContainer>
        </MainContainer>
    );
}

export default Cards;