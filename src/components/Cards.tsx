import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import arrowRight from "../images/arrowRight.svg";
import arrowLeft from "../images/arrowLeft.svg";
import { GridButtons, StyledCard } from "./styles/Cards.style";
import { StyledButton } from "./styles/Button.style";

interface BasicCardProps {
    table: string[][],
    currentCard: number,
    previousCard(): void,
    nextCard(): void,
}

export const BasicCard: React.FC<BasicCardProps> = ({ table, currentCard, previousCard, nextCard }) => {

    const temp: React.MutableRefObject<string[][]> = useRef<string[][]>([...table].sort(() => Math.random() - 0.5));

    return (
        <StyledCard>
            <span>{currentCard + 1}</span>
            <p>
                {temp.current[currentCard][0]} - {temp.current[currentCard][1]}
            </p>
            <GridButtons>
                <StyledButton onClick={previousCard}>
                    <img
                        src={arrowLeft} 
                        alt="Previous card" 
                    />
                </StyledButton>
                <StyledButton onClick={nextCard}>
                    <img
                        src={arrowRight} 
                        alt="Mext card" 
                    />
                </StyledButton>
            </GridButtons>
        </StyledCard>
    );
}

interface LearnCardProps {
    table: string[][],
    currentCard: number,
    setCurrentCard: Dispatch<SetStateAction<number>>
}

export const LearnCard: React.FC<LearnCardProps> = ({ table, currentCard, setCurrentCard }) => {

    interface Question {
        word: string,
        answers: string[],
        rightIndex: number
    }
    
    const [randomizedSet, setRandomizedSet] = useState<Question[]>([]);

    const isAnswered: React.MutableRefObject<boolean> = useRef<boolean>(false);

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, currentCard: number, answer: string) => {
        if (randomizedSet[currentCard].answers.indexOf(answer) === randomizedSet[currentCard].rightIndex) {
            e.currentTarget.style.backgroundColor = "#a3ebb1"
            isAnswered.current = true;
        }
        else {
            e.currentTarget.style.backgroundColor = "#ffdde5"
        }
    }

    const nextCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (currentCard === (table.length - 1)) return
        const buttons = e.currentTarget.getElementsByTagName("button");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = "#fff"            
        }
        setCurrentCard(currentCard + 1);
        isAnswered.current = false;
    }
    
    useEffect(() => {

        const getRandomAnswers = (table: string[][]) => {
            let result: number[] = [];
            let i: number = 0;
            while (i < 4) {
                let random = Math.floor((Math.random() * table.length));
                if (result.includes(random)) continue // need to fix this later
                result.push(random);
                i++;
            }
            return result;
        }
    
        const assignAnswers = (table: string[][]): Question[] => {
    
            if (table.length < 4) return []
            let temp: string[][] = [...table]
            temp.sort(() => Math.random() - 0.5)
            return temp.map((data: string[]) => {
                let randoms: number[] = getRandomAnswers(table);
                let result: Question = {
                    word: data[0],
                    answers: [
                        table[randoms[0]][1],
                        table[randoms[1]][1],
                        table[randoms[2]][1],
                        table[randoms[3]][1]
                    ],
                    rightIndex: Math.floor(Math.random() * 4)
                }
                if (result.answers.includes(data[1])) {
                    result.rightIndex = result.answers.indexOf(data[1]);
                    return result;
                }
                result.answers[result.rightIndex] = data[1];
                return result
            });
        }

        setRandomizedSet(assignAnswers(table));

    }, [table])
    
    return (
        <StyledCard onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => isAnswered.current ? nextCard(e) : undefined}>
            {randomizedSet.length !== 0 && 
            <>
                <span>{currentCard + 1}</span>

                <p>{randomizedSet[currentCard].word}</p>

                <GridButtons>
                    {
                        randomizedSet[currentCard].answers.map((answer, index) => (
                            <StyledButton 
                            key={index} 
                            onClick={(e: any) => checkAnswer(e, currentCard, answer)}
                            >
                                {answer}
                            </StyledButton>
                        ))
                    }
                </GridButtons>
            </>
            }
        </StyledCard>
    );
}