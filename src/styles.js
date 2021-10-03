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
        --font-color: #f8a70a;
        --button-color: #F86BC3;
        --anchor-color: #f8a70a;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    body {
        background: var(--primary-color);
        font-family: 'Mulish', sans-serif;
        color: var(--font-color);
        font-size: 1rem;
        line-height: 1.5;
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
    body {
        background: red;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    body {
        background: blue;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    body {
        background: green;
    }
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

    a {
        color: var(--anchor-color);
    }
`;

export default GlobalStyle;
