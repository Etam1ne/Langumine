import { useEffect, useRef, useState } from "react";
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
    currentCard: number
}

export const LearnCard = ({ table, currentCard }: LearnCardProps) => {

    interface Question {
        word?: string,
        answer1?: string,
        answer2?: string,
        answer3?: string,
        answer4?: string
    }

    const [randomizedSet, setRandomizedSet] = useState<Question[]>([]);

    const getRandomAnswers = (table: string[][]) => {
        if (table.length < 4) console.log("not enough items in the table")

        let result: number[] = [];
        let i: number = 0;
        while (i < 4) {
            let random = Math.floor((Math.random() * table.length));
            result.push(random);
            i++;
        }
        return result;
    }

    const assignAnswers = (table: string[][]): Object[] => {

        if (table.length < 4) return [{}]

        return table.map((data: string[]) => {
            let randoms: number[] = getRandomAnswers(table);
            return {
                word: data[0],
                answer1: table[randoms[0]][1],
                answer2: table[randoms[1]][1],
                answer3: table[randoms[2]][1],
                answer4: table[randoms[3]][1]
            }
        });
    }

    useEffect(() => {
        setRandomizedSet(assignAnswers(table));
    }, [])
    
    return (
        <StyledCard>
            {randomizedSet.length === 1 ? <></> : 
            <>
                <span>{currentCard + 1}</span>

                <p>{randomizedSet[0].word}</p>

                <div>
                    <StyledButton>
                        {randomizedSet[0].answer1}
                    </StyledButton>
                    <StyledButton>
                        {randomizedSet[0].answer2}
                    </StyledButton>
                    <StyledButton>
                        {randomizedSet[0].answer3}
                    </StyledButton>
                    <StyledButton>
                        {randomizedSet[0].answer4}
                    </StyledButton>
                </div>
            </>
            }
        </StyledCard>
    );
}