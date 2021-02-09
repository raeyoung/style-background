import { createGlobalStyle } from "styled-components";

const DarkStyles = createGlobalStyle`
    #mainHeader {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        background-color: #7d7d7d;
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
        background-color: #0636a2;
    }
`;

export default DarkStyles;
