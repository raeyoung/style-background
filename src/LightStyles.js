import { createGlobalStyle } from "styled-components";

const LightStyles = createGlobalStyle`
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

export default LightStyles;
