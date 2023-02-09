import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import arrowRight from "../images/arrowRight.svg";
import arrowLeft from "../images/arrowLeft.svg";
import { StyledCard } from "./styles/Cards.style";
import { StyledButton } from "./styles/Button.style";

interface BasicCardProps {
    table: string[][],
    currentCard: number,
    previousCard(): void,
    nextCard(): void,
}

export const BasicCard = ({ table, currentCard, previousCard, nextCard }: BasicCardProps) => {
    return (
        <StyledCard>
            <span>{currentCard + 1}</span>
            <p>
                {table[currentCard][0]} - {table[currentCard][1]}
            </p>
            <div>
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
            </div>
        </StyledCard>
    );
}

interface LearnCardProps {
    table: string[][],
    currentCard: number,
    setCurrentCard: Dispatch<SetStateAction<number>>
}

export const LearnCard = ({ table, currentCard, setCurrentCard }: LearnCardProps) => {

    
    interface Question {
        word: string,
        answers: string[],
        rightIndex: number
    }
    
    const [randomizedSet, setRandomizedSet] = useState<Question[]>([]);

    const isAnswered = useRef<boolean>(false);

    const checkAnswer = (e: any, currentCard: number, answer: string) => {
        if (randomizedSet[currentCard].answers.indexOf(answer) === randomizedSet[currentCard].rightIndex) {
            e.target.className += " rightAnswer";
            isAnswered.current = true;
        }
        else {
            e.target.className += " wrongAnswer";
        }
    }

    const nextCard = () => {
        setCurrentCard(currentCard + 1);
        isAnswered.current = false;
    }
    
    useEffect(() => {

        const getRandomAnswers = (table: string[][]) => {
            let result: number[] = [];
            let i: number = 0;
            while (i < 4) {
                let random = Math.floor((Math.random() * table.length));
                result.push(random);
                i++;
            }
            return result;
        }
    
        const assignAnswers = (table: string[][]): Question[] => {
    
            if (table.length < 4) return []
    
            return table.map((data: string[]) => {
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
                result.answers[result.rightIndex] = data[1];
                return result
            });
        }

        setRandomizedSet(assignAnswers(table));

    }, [table])
    
    return (
        <StyledCard onClick={() => isAnswered.current ? nextCard() : undefined}>
            {randomizedSet.length !== 0 && 
            <>
                <span>{currentCard + 1}</span>

                <p>{randomizedSet[currentCard].word}</p>

                <div>
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
                </div>
            </>
            }
        </StyledCard>
    );
}