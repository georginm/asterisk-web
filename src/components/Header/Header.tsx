import React from 'react';
import { Link } from 'react-router-dom';

import logoName from '../../assets/asterisk-logo-name.png';
import logo from '../../assets/asterisk-logo.png';

import { Img, Component } from './styles';

const Header: React.FC = () => (
    <>
        <Component>
            <a href="/">
                <div>
                    <Img src={logo} alt="Logo" />
                    <Img src={logoName} alt="Logo" />
                </div>
            </a>

            <nav id="menu">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/endpoints/list/">Endpoints</a>
                        <ul>
                            <li>
                                <a href="/endpoints/">Cadastrar Endpoint</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="/aors/list/">Aors</a>
                        <ul>
                            <li>
                                <a href="/aors/">Cadastrar Aors</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="/auths/list/">Auth</a>
                        <ul>
                            <li>
                                <a href="/auths/">Cadastrar Auth</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="/queues/list/">Queues</a>
                        <ul>
                            <li>
                                <a href="/queues/">Cadastrar Queues</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="/queuemembers/list/">Queue Members</a>
                        <ul>
                            <li>
                                <a href="/queuemembers/">
                                    Cadastrar Queue Members
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="/Extensions/list/">Extensions</a>
                        <ul>
                            <li>
                                <a href="/endpoints/">Cadastrar Endpoint</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </Component>
    </>
);

export default Header;
