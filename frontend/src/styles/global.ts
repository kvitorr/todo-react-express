import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --background-color-primary: #F7F8F9;
        --background-color-secundary: #FFFFFF;
        --background-color-terciary: #C9C7C7;

        --background-color-hover: #D5D9DF;
        --box-shadow-color: #D9DCE1;
    }
    
`