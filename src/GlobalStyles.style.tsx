import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from "styled-components";

export const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    body {
        margin: 0;
        
        font-family: "Roboto", sans-serif;
    }
    
    main {
        margin-top: 4rem;
    }
`