import styled, { StyledComponent } from "styled-components";

export const MainContainer: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export const CardContainer: StyledComponent<"div", any, {}, never> = styled.div`
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

export const CardTypesContainer: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    gap: 1rem;
`

export const CardType: StyledComponent<"div", any, {}, never> = styled.div`
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

export const StyledCard: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: min(800px, 90vw);
    aspect-ratio: 1.8;
    padding: 1rem;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 20px;

    span {
        font-size: 1rem;
        color: ${props => props.theme.colors.green};
    }
    p {
        font-size: 1.5rem;
    }
`

export const GridButtons: StyledComponent<"div", any, {}, never> = styled.div`
    display: grid;
    width: 100%;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
`