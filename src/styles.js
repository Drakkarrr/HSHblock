import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --primary-color: #1B1E61;
        --secondary-color: #24266B;
        --font-color: #FFFFFF;
        --button-color: #F86BC3;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background: var(--primary-color);
        font-family: 'Mulish', sans-serif;
        color: var(--font-color);
        font-size: 1rem;
        line-height: 1.5;
    }
    
    h1, h2, h3 {
        font-family: 'Anton', sans-serif;
        color: var(--font-color);
        letter-spacing: 1.2px;
    }

    p {
        color: var(--font-color);
    }

    li {
        letter-spacing: .5px;
    }
`;

export default GlobalStyle;
