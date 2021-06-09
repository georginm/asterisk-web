import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

// Importando os icones
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

import { QueuesList, Item, Form } from './styles';

// Importando componentes
import api from '../../../services/api';
import Input from '../../../components/Input ';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

// Importando tipagem
import { Queues } from '../../../types';

const Queue: React.FC<Queues> = () => {
    const [seachQueues, getQueues] = useState('');
    const [queues, setQueues] = useState<Queues[]>([]);

    async function list() {
        const response = await api.get('queues/list/');
        setQueues([...response.data]);
    }

    useEffect(() => {
        list();
    }, []);

    async function handleSearchQueuess(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let response;
        if (seachQueues) {
            response = await api.get(`queues/list/?id=${seachQueues}`);
        } else {
            response = await api.get(`queues/list/`);
        }
        setQueues([...response.data]);
        getQueues('');
    }

    async function deleteQueues(id: string) {
        await api.delete(`queues/${id}`);
        list();
    }

    return (
        <>
            <QueuesList>
                <Title>Queues</Title>

                <Form onSubmit={handleSearchQueuess}>
                    <Input
                        name="Queues"
                        value={seachQueues}
                        onChange={(e) => getQueues(e.target.value)}
                        type="text"
                        placeholder="Buscar"
                    />

                    <Button type="submit">Pesquisar</Button>
                </Form>

                {queues.map((queue) => (
                    <>
                        <Item key={queue.name}>
                            <Link to={`queues/list/id=${queue.name}`}>
                                <div id="informations">
                                    <div>
                                        <strong>{`Nome: `}</strong>
                                        <strong>{`Musica de espera: `}</strong>
                                        <strong>{`Tempo em espera: `}</strong>
                                        <strong>{`Toca em uso: `}</strong>
                                        <strong>{`Monitor: `}</strong>
                                        <strong>{`Estratégia: `}</strong>
                                        <strong>{`Entra na fila quando vazio: `}</strong>
                                        <strong>{`Sai da fila quando vazio: `}</strong>
                                    </div>
                                    <div>
                                        <p>{queue.name}</p>
                                        <p>{queue.musiconhold}</p>
                                        <p>{queue.timeout}</p>
                                        <p>{queue.ringinuse}</p>
                                        <p>{queue.monitor_type}</p>
                                        <p>{queue.strategy}</p>
                                        <p>{queue.joinempty}</p>
                                        <p>{queue.leavewhenempty}</p>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <Button id="update">
                                    <FaEdit size={25} />
                                </Button>

                                <Button
                                    id="delete"
                                    onClick={() => deleteQueues(queue.name)}
                                >
                                    <MdDelete size={25} />
                                </Button>
                            </div>
                        </Item>
                    </>
                ))}
            </QueuesList>
        </>
    );
};

export default Queue;
