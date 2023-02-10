import styled from "styled-components"

export const StyledButton = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 4rem;
    border: 1px solid ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.green};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.lightestGreen};
    }

    img {
        width: 2rem;
        height: 2rem;
    }
`