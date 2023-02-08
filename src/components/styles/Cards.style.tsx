import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        padding: 0;
        margin: 0;
        font-weight: 400;
        font-size: 24px;
    }
`

export const CardTypesContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const CardType = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 20px;
    padding: 0.5rem 1rem;
    font-size: 16px;
    color: ${props => props.theme.colors.green};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.lightestGreen};
    }

    img {
        height: 2rem;
        width: 2rem;
    }
`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 800px;
    height: 450px;
    padding: 1rem;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 20px;

    span {
        font-size: 20px;
        color: ${props => props.theme.colors.green};
    }
    p {
        font-size: 32px;
    }
    div {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;

        button:first-child {
            border-bottom-left-radius: 20px;
        }
        button:last-child {
            border-bottom-right-radius: 20px;
        }
    }
`