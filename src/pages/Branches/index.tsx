import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

// Importando os icones
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

import { BranchesList, Item, Form } from './styles';

// Importando componentes
import api from '../../services/api';

// Importando componentes
import Input from '../../components/Input ';
import Button from '../../components/Button';
import Title from '../../components/Title';

// Importando tipagem
import { Branches } from '../../types';

const Queue: React.FC<Branches> = () => {
    const [seachItem, getItem] = useState('');
    const [items, setItem] = useState<Branches[]>([]);

    async function list() {
        const response = await api.get('/');
        setItem([...response.data]);
    }

    useEffect(() => {
        list();
    }, []);

    async function handleSearchItems(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let response;
        if (seachItem) {
            response = await api.get(`/?id=${seachItem}`);
        } else {
            response = await api.get(`/`);
        }
        setItem([...response.data]);
        getItem('');
    }

    async function deleteItem(interf: string) {
        await api.delete(`/branches/${interf}`);
        list();
    }

    return (
        <>
            <BranchesList>
                <Title>Ramais</Title>

                <Form onSubmit={handleSearchItems}>
                    <Input
                        name="Item"
                        value={seachItem}
                        onChange={(e) => getItem(e.target.value)}
                        type="text"
                        placeholder="Buscar"
                    />

                    <Button type="submit">Pesquisar</Button>
                </Form>

                {items.map((item) => (
                    <>
                        <Item key={item.id}>
                            <Link to={`items/id=${item.id}`}>
                                <div id="informations">
                                    <div>
                                        <strong>{`Ramal: `}</strong>
                                        <strong>{`Transport: `}</strong>
                                        <strong>{`Context: `}</strong>
                                        <strong>{`Disallow: `}</strong>
                                        <strong>{`Allow: `}</strong>

                                        <strong>{`Rewrite Contact: `}</strong>
                                        <strong>{`Rtp Symmetric: `}</strong>
                                        <strong>{`Force Rport: `}</strong>
                                        <strong>{`Direct Media: `}</strong>

                                        <strong>{`Auth: `}</strong>
                                        <strong>{`Auth Type: `}</strong>
                                        <strong>{`Username: `}</strong>
                                        <strong>{`Password: `}</strong>

                                        <strong>{`Aors: `}</strong>
                                        <strong>{`Max Contacts: `}</strong>
                                    </div>
                                    <div>
                                        <p>{item.id}</p>
                                        <p>{item.transport}</p>
                                        <p>{item.context}</p>
                                        <p>{item.disallow}</p>
                                        <p>{item.allow}</p>

                                        <p>{item.rewrite_contact}</p>
                                        <p>{item.rtp_symmetric}</p>
                                        <p>{item.force_rport}</p>
                                        <p>{item.direct_media}</p>

                                        <p>{item.auth}</p>
                                        <p>{item.auth_type}</p>
                                        <p>{item.username}</p>
                                        <p>{item.password}</p>

                                        <p>{item.aors}</p>
                                        <p>{item.max_contacts}</p>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <Button id="update">
                                    <FaEdit size={25} />
                                </Button>

                                <Button
                                    id="delete"
                                    onClick={() => deleteItem(item.id)}
                                >
                                    <MdDelete size={25} />
                                </Button>
                            </div>
                        </Item>
                    </>
                ))}
            </BranchesList>
        </>
    );
};

export default Queue;
