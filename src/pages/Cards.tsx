import { useState } from "react";
import { StyledButton } from "../components/styles/Button.style"
import { MainContainer, CardContainer, CardTypesContainer, CardType, Card } from "../components/styles/Cards.style";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectTable } from "./store";
import cards from "../images/cards.svg";
import repeat from "../images/repeat.svg";
import arrowLeft from "../images/arrowLeft.svg";
import arrowRight from "../images/arrowRight.svg";

export const Cards = () => {

    const table: string[][] = useAppSelector(selectTable);

    const [currentCard, setCurrentCard] = useState<number>(0);

    const nextCard = () => {
        if (currentCard === table.length - 1) {
            setCurrentCard(0)
        } else {
            setCurrentCard(currentCard + 1)
        }
    }

    const previousCard = () => {
        if (currentCard === 0) {
            setCurrentCard(table.length - 1)
        } else {
            setCurrentCard(currentCard - 1)
        }
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
                    <span>{currentCard + 1}</span>
                    <p>
                        {table[currentCard][0]} - {table[currentCard][1]}
                    </p>
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