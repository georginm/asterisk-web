import { createGlobalStyle } from 'styled-components';

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

    body, input, button, a {
        font: 16px Roboto, sans-serif;
    }

    h1 {
        font-size: 48px;
        color: #9C9C9C;
        margin-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 56px;
    }

    #root {
        max-width: 900px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button, a {
        cursor: pointer;
    }

    form {
        margin-top: 40px;
        max-width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    input {
        margin-top: 20px;
        width: 40%;
        color: #3a3a3a;
        height: 40px;
        border: 0;
        border-radius: 5px;
        padding-left: 10px;
        &::placeholder {
            color: #a8a8b3;
        }
    }
    button {
        margin-top: 20px;
        border-radius: 5px;
        padding: 2px 5px;
        width: 40%;
        height: 40px;
        background: #ff9e30;
        color: #fdfefd;
        border: 0;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: #faae30;
        }
    }
`;
