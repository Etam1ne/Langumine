import { useState } from "react";
import { MainContainer, CardContainer, CardTypesContainer, CardType } from "../components/styles/Cards.style";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectTable } from "./store";
import cards from "../images/cards.svg";
import repeat from "../images/repeat.svg";
import { BasicCard, LearnCard } from "../components/Cards";

export const Cards: React.FC = () => {

    const table: string[][] = useAppSelector(selectTable);

    const [currentCard, setCurrentCard] = useState<number>(0);
    const [cardType, setCardType] = useState<string>("Basic");

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

    const switchCardType = () => {
        switch (cardType) {
            case "Basic":
                return (
                    <BasicCard 
                    table={table}
                    currentCard={currentCard}
                    nextCard={nextCard}
                    previousCard={previousCard}
                    />
                );
            case "Learn":
                return (
                    <LearnCard 
                    table={table}
                    currentCard={currentCard}
                    setCurrentCard={setCurrentCard}
                    />
                );
        }
    }

    return (
        <MainContainer>
            <CardContainer>
                <h1>Pack name</h1>
                <CardTypesContainer>
                    <CardType onClick={() => setCardType("Basic")}>
                        <img
                            src={cards} 
                            alt="All cards" 
                        />
                        <span>All</span>
                    </CardType>
                    <CardType onClick={() => setCardType("Learn")}>
                        <img
                            src={repeat} 
                            alt="Learning cards" 
                        />
                        <span>Learning</span>
                    </CardType>
                </CardTypesContainer> 
                
                {switchCardType()}
                
            </CardContainer>
        </MainContainer>
    );
}