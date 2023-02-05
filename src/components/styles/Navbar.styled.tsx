import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.lightestGreen};
    border-bottom: 1px solid ${props => props.theme.colors.green};

    ul {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 1rem;
        list-style: none;
        gap: 1rem;

        a {
            font-size: 20px;
            text-decoration: none;
            color: ${props => props.theme.colors.green};
        }
        a:visited {
            text-decoration: none;
        }

        img {
            height: 2rem;
            width: 2rem;
        }
    }
`