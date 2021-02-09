import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: boerder-box;
    }

    body {
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 14px;
        height: 100vh;
        margin: 0;
        background-color: #F9F9F9;
    }

    h1 { font-weight: 600; font-size: 2em; }

    header, footer, main {
        padding: 1.2em;
    }

    #app {
        display: grid;
        grid-template-areas:
            "header header"
            "article nav";
        grid-template-rows: 60px 1fr;
        grid-template-columns: 1fr 25%;
        height: inherit;
    }
    #app > header { grid-area: header; }
    #app > main { grid-area: main; }
    #app > nav { grid-area: nav; }

    #mainHeader {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        background-color: #e0a9bb;
    }
    #main {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        background-color: #97c0f3;
    }
    #mainNav {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        background-color: #c7c7c7;
    }
`;

export default GlobalStyles;
