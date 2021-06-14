import React from 'react';

// Lib da rocketseat para manipulação de formuário
import { Form } from '@unform/web';

// Importando componentes
import Button from '../../components/Button';
import Field from '../../components/Field';
import Title from '../../components/Title';

// Importando Api Axios
import api from '../../services/api';

// Importando tipagem do Queue
import { Queues } from '../../types';

const Queue: React.FC = () => {
    // Adicionando item no DB
    async function addNewQueue(data: Queues, { reset }: any) {
        await api
            .post('queues/create', { ...data })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        reset();
    }
    return (
        <>
            <Title>Cadastrar Queue</Title>
            <Form onSubmit={addNewQueue}>
                <Field name="name" type="text" placeholder="Nome" />
                <Field
                    name="musiconhold"
                    type="text"
                    placeholder="Musica de espera"
                />
                <Field
                    name="timeout"
                    type="text"
                    placeholder="Tempo em espera"
                />
                <Field name="ringinuse" type="text" placeholder="Ring in use" />
                <Field name="monitor_type" type="text" placeholder="Monitor" />
                <Field name="strategy" type="text" placeholder="Estratégia" />
                <Field name="joinempty" type="text" placeholder="Join Empty" />
                <Field
                    name="leavewhenempty"
                    type="text"
                    placeholder="Leave When Empty"
                />

                <Button type="submit" onClick={() => addNewQueue}>
                    Enviar
                </Button>
            </Form>
        </>
    );
};

export default Queue;
