import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/globals';
import Header from './components/Header/Header';

const App: React.FC = () => (
    <>
        <Header />
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
        <GlobalStyle />
    </>
);

export default App;
