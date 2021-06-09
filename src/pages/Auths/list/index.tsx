import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

// Importando os icones
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

import { AuthsList, Item, Form } from './styles';

// Importando componentes
import api from '../../../services/api';
import Input from '../../../components/Input ';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

// Importando tipagem
import { Auths } from '../../../types';

const Auth: React.FC<Auths> = () => {
    const [seachAuths, getAuths] = useState('');
    const [auths, setAuths] = useState<Auths[]>([]);

    async function list() {
        const response = await api.get('auth/list/');
        setAuths([...response.data]);
    }

    useEffect(() => {
        list();
    }, []);

    async function handleSearchAuthss(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let response;
        if (seachAuths) {
            response = await api.get(`auth/list/?id=${seachAuths}`);
        } else {
            response = await api.get(`auth/list/`);
        }
        setAuths([...response.data]);
        getAuths('');
    }

    async function deleteAuths(id: string) {
        await api.delete(`auth/${id}`);
        list();
    }

    return (
        <>
            <AuthsList>
                <Title>Auths</Title>

                <Form onSubmit={handleSearchAuthss}>
                    <Input
                        name="Auths"
                        value={seachAuths}
                        onChange={(e) => getAuths(e.target.value)}
                        type="text"
                        placeholder="Buscar"
                    />

                    <Button type="submit">Pesquisar</Button>
                </Form>

                {auths.map((auth) => (
                    <>
                        <Item key={auth.id}>
                            <Link to={`auth/list/id=${auth.id}`}>
                                <strong>{auth.id}</strong>
                                <div id="informations">
                                    <div>
                                        <strong>{`Login: `}</strong>
                                        <strong>{`Senha: `}</strong>
                                        <strong>{`Autenticação: `}</strong>
                                    </div>
                                    <div>
                                        <p>{auth.username}</p>
                                        <p>{auth.password}</p>
                                        <p>{auth.auth_type}</p>
                                    </div>
                                </div>
                            </Link>

                            <Button id="update">
                                <FaEdit size={25} />
                            </Button>

                            <Button
                                id="delete"
                                onClick={() => deleteAuths(auth.id)}
                            >
                                <MdDelete size={25} />
                            </Button>
                        </Item>
                    </>
                ))}
            </AuthsList>
        </>
    );
};

export default Auth;
