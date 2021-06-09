import React from 'react';

// Lib da rocketseat para manipulação de formuário
import { Form } from '@unform/web';

// Importando componentes
import Button from '../../components/Button';
import Field from '../../components/Field';
import Title from '../../components/Title';

// Importando Api Axios
import api from '../../services/api';

// Importando tipagem do QueueMember
import { QueueMembers } from '../../types';

const QueueMember: React.FC = () => {
    // Adicionando item no DB
    async function addNewQueueMember(data: QueueMembers) {
        console.log(data);
        await api
            .post('queuemembers/create', { ...data })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <Title>Cadastrar Queue Member</Title>
            <Form onSubmit={addNewQueueMember}>
                <Field name="interface" type="text" placeholder="Interface" />
                <Field
                    name="queue_name"
                    type="text"
                    placeholder="Nome da Fila"
                />
                <Field
                    name="membername"
                    type="text"
                    placeholder="Nome do Membro"
                />
                <Field
                    name="state_interface"
                    type="text"
                    placeholder="Estado Interface"
                />
                <Field name="penalty" type="text" placeholder="Penalidade" />
                <Field name="paused" type="text" placeholder="Pausado" />
                <Field
                    name="wrapuptime"
                    type="text"
                    placeholder="Encerramento"
                />

                <Button type="submit" onClick={() => addNewQueueMember}>
                    Enviar
                </Button>
            </Form>
        </>
    );
};

export default QueueMember;
