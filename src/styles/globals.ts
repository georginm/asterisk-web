import { createGlobalStyle } from 'styled-components';
// import asteriskLogo from '../assets/asterisk-logo.png';
// background: #F0F0F5 url(${asteriskLogo}) no-repeat 70% top

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #F0F0F5;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto, sans-serif;
    }

    h1 {
        font-size: 48px;
        color: #1e2d69;
        margin-top: 80px;
    }
    #root {
        max-width: 700px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`;
