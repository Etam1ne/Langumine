import styled, { StyledComponent } from "styled-components";


export const InputContainer: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 1rem;
`
export const StyledForm: StyledComponent<"form", any, {}, never> = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    h1 {
        padding: 0;
        margin: 0;
        color: $green;
    }

    input[type=file] {
        display: none;
    }

    input[type=submit]
     {
        width: max-content;
        height: min-content;
        border-radius: 20px;
        padding: 10px;
    }
`

export const SelectorContainer: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    gap: 1rem;
`

export const StyledSelector: StyledComponent<"select", any, {}, never> = styled.select`
    all: unset;
    width: max-content;
    padding: 5px;
    text-align: center;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 20px;
    color: ${props => props.theme.colors.green};
    cursor: pointer;
`

export const StyledTable: StyledComponent<"table", any, {}, never> = styled.table`
    border: 1px solid ${props => props.theme.colors.green};
    border-collapse: collapse;
    th, td {
        width: min(45vw, 20rem);
        padding: 5px;
        border: 1px solid ${props => props.theme.colors.green};
    }
    th:first-child,
    td:first-child {
        width: fit-content;
    }
    th {
        color: ${props => props.theme.colors.green};
    }
`

export const StyledLabel: StyledComponent<"label", any, {}, never> = styled.label`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: min-content;
    border: 1px solid ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.green};
    cursor: pointer;
    border-radius: 20px;
    padding: 10px;

    &:hover {
        background-color: ${props => props.theme.colors.lightestGreen};
    }
`

export const StyledSubmit: StyledComponent<"input", any, {}, never> = styled.input`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: min-content;
    border: 1px solid ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.green};
    cursor: pointer;
    border-radius: 20px;
    padding: 10px;

    &:hover {
        background-color: ${props => props.theme.colors.lightestGreen};
    }
`