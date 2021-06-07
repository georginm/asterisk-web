import React from 'react';

import logoName from '../../assets/asterisk-logo-name.png';
import logo from '../../assets/asterisk-logo.png';

import { Img } from './styles';

const Header: React.FC = () => (
    <>
        <Img src={logo} alt="Logo" />
        <Img src={logoName} alt="Logo" />
    </>
);

export default Header;
