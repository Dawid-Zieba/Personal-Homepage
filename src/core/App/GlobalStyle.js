import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        letter-spacing: 0.05em;
        word-break: break-word;
        transition: background 0.4s;
        padding-bottom: 108px;

    
        
    }

    button {
        cursor: pointer;
    }   
`