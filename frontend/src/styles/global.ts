import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    
    body {
        min-height: 100vh;
    }

    #root {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3A54AA;
    }
`