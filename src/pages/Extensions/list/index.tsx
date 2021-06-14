import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

// Importando os icones
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

import { EndpointList, Item, Form } from './sytles';

// Importando componentes
import api from '../../../services/api';
import Input from '../../../components/Input ';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

// Importando tipagem
import { Endpoints } from '../../../types';

const Endpoint: React.FC = () => {
    const [seachEndpoint, getEndpoint] = useState('');
    const [endpoints, setEndpoint] = useState<Endpoints[]>([]);

    async function list() {
        const response = await api.get('endpoint/list/');
        setEndpoint([...response.data]);
    }

    useEffect(() => {
        list();
    }, []);

    async function handleSearchEndpoints(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let response;
        if (seachEndpoint) {
            response = await api.get(`endpoint/list/?id=${seachEndpoint}`);
        } else {
            response = await api.get(`endpoint/list/`);
        }
        setEndpoint([...response.data]);
        getEndpoint('');
    }

    async function deleteEndpoint(id: string) {
        await api.delete(`endpoint/${id}`);
        list();
    }

    return (
        <>
            <EndpointList>
                <Title>Endpoints</Title>

                <Form onSubmit={handleSearchEndpoints}>
                    <Input
                        name="endpoint"
                        value={seachEndpoint}
                        onChange={(e) => getEndpoint(e.target.value)}
                        type="text"
                        placeholder="Buscar"
                    />

                    <Button type="submit">Pesquisar</Button>
                </Form>

                {endpoints.map((endpoint) => (
                    <>
                        <Item key={endpoint.id}>
                            <Link to={`list/id=${endpoint.id}`}>
                                <strong>{endpoint.id}</strong>
                                <div id="informations">
                                    <strong>{endpoint.context}</strong>
                                    <p>{endpoint.allow}</p>
                                </div>
                            </Link>

                            <Button id="update">
                                <FaEdit size={25} />
                            </Button>

                            <Button
                                id="delete"
                                onClick={() => deleteEndpoint(endpoint.id)}
                            >
                                <MdDelete size={25} />
                            </Button>
                        </Item>
                    </>
                ))}
            </EndpointList>
        </>
    );
};

export default Endpoint;
