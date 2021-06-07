import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import React, { useState, useEffect, FormEvent } from 'react';
import { EndpointList, Title, Form, Item } from './sytles';
import Button from '../../components/Button';

import api from '../../services/api';

interface Endpoint {
    id: string;
    context: string;
    allow: string;
}

const Endpoint: React.FC = () => {
    const [seachEndpoint, getEndpoint] = useState('');
    const [endpoints, setEndpoint] = useState<Endpoint[]>([]);

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
                    <input
                        value={seachEndpoint}
                        onChange={(e) => getEndpoint(e.target.value)}
                        type="text"
                        placeholder="Buscar"
                    />
                    <button type="submit">Pesquisar</button>
                </Form>

                {endpoints.map((endpoint) => (
                    <>
                        <Item key={endpoint.id}>
                            <a href={`list/id=${endpoint.id}`}>
                                <strong>{endpoint.id}</strong>
                                <div>
                                    <strong>{endpoint.context}</strong>
                                    <p>{endpoint.allow}</p>
                                </div>
                            </a>

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
