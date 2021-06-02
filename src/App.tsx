import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globals';

import logoName from './assets/asterisk-logo-name.png';
import logo from './assets/asterisk-logo.png';

const App: React.FC = () => (
    <>
        <img src={logo} alt="Logo" height="50 px" />
        <img src={logoName} alt="Logo" height="40 px" padding-bottom="10px" />

        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
    </>
);

export default App;
