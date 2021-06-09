import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

// Importando os icones
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

import { QueueMemberList, Item, Form } from './styles';

// Importando componentes
import api from '../../../services/api';
import Input from '../../../components/Input ';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

// Importando tipagem
import { QueueMembers } from '../../../types';

const Queue: React.FC<QueueMembers> = () => {
    const [seachQueueMembers, getQueueMembers] = useState('');
    const [queueMembers, setQueueMembers] = useState<QueueMembers[]>([]);

    async function list() {
        const response = await api.get('queuemembers');
        setQueueMembers([...response.data]);
    }

    useEffect(() => {
        list();
    }, []);

    async function handleSearchQueueMemberss(
        event: FormEvent<HTMLFormElement>,
    ) {
        event.preventDefault();
        let response;
        if (seachQueueMembers) {
            response = await api.get(`queuemembers/?id=${seachQueueMembers}`);
        } else {
            response = await api.get(`queuemembers/`);
        }
        setQueueMembers([...response.data]);
        getQueueMembers('');
    }

    async function deleteQueueMembers(interf: string) {
        await api.delete(`queuemembers/${interf}`);
        list();
    }

    return (
        <>
            <QueueMemberList>
                <Title>QueueMembers</Title>

                <Form onSubmit={handleSearchQueueMemberss}>
                    <Input
                        name="QueueMembers"
                        value={seachQueueMembers}
                        onChange={(e) => getQueueMembers(e.target.value)}
                        type="text"
                        placeholder="Buscar"
                    />

                    <Button type="submit">Pesquisar</Button>
                </Form>

                {queueMembers.map((member) => (
                    <>
                        <Item key={member.interface}>
                            <Link to={`queuemembers/id=${member.interface}`}>
                                <div id="informations">
                                    <div>
                                        <strong>{`Nome da Fila: `}</strong>
                                        <strong>{`Interface: `}</strong>
                                        <strong>{`Pausado: `}</strong>
                                        <strong>{`Wrap up Time: `}</strong>
                                    </div>
                                    <div>
                                        <p>{member.queue_name}</p>
                                        <p>{member.interface}</p>
                                        <p>
                                            {member.paused === 1
                                                ? 'Sim'
                                                : 'Não'}
                                        </p>
                                        <p>{member.wrapuptime}</p>
                                    </div>
                                </div>
                            </Link>
                            <div>
                                <Button id="update">
                                    <FaEdit size={25} />
                                </Button>

                                <Button
                                    id="delete"
                                    onClick={() =>
                                        deleteQueueMembers(member.interface)
                                    }
                                >
                                    <MdDelete size={25} />
                                </Button>
                            </div>
                        </Item>
                    </>
                ))}
            </QueueMemberList>
        </>
    );
};

export default Queue;
