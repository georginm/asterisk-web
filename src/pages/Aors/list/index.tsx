import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

// Importando os icones
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

import { AorsList, Item, Form } from './styles';

// Importando componentes
import api from '../../../services/api';
import Input from '../../../components/Input ';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

// Importando tipagem
import { Aors } from '../../../types';

const Aor: React.FC<Aors> = () => {
    const [seachAors, getAors] = useState('');
    const [aors, setAors] = useState<Aors[]>([]);

    async function list() {
        const response = await api.get('aors/list/');
        setAors([...response.data]);
    }

    useEffect(() => {
        list();
    }, []);

    async function handleSearchAorss(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let response;
        if (seachAors) {
            response = await api.get(`aors/list/?id=${seachAors}`);
        } else {
            response = await api.get(`aors/list/`);
        }
        setAors([...response.data]);
        getAors('');
    }

    async function deleteAors(id: string) {
        await api.delete(`aors/${id}`);
        list();
    }

    return (
        <>
            <AorsList>
                <Title>Aors</Title>

                <Form onSubmit={handleSearchAorss}>
                    <Input
                        name="Aors"
                        value={seachAors}
                        onChange={(e) => getAors(e.target.value)}
                        type="text"
                        placeholder="Buscar"
                    />

                    <Button type="submit">Pesquisar</Button>
                </Form>

                {aors.map((aor) => (
                    <>
                        <Item key={aor.id}>
                            <Link to={`aors/list/id=${aor.id}`}>
                                <strong>{aor.id}</strong>
                                <div id="informations">
                                    <div>
                                        <strong>{`Max Contacts: `}</strong>
                                    </div>
                                    <div>
                                        <p>{aor.max_contacts}</p>
                                    </div>
                                </div>
                            </Link>

                            <Button id="update">
                                <FaEdit size={25} />
                            </Button>

                            <Button
                                id="delete"
                                onClick={() => deleteAors(aor.id)}
                            >
                                <MdDelete size={25} />
                            </Button>
                        </Item>
                    </>
                ))}
            </AorsList>
        </>
    );
};

export default Aor;
