import React from 'react';

// Lib da rocketseat para manipulação de formuário
import { Form } from '@unform/web';

// Importando componentes
import Button from '../../components/Button';
import Field from '../../components/Field';
import Title from '../../components/Title';

// Importando Api Axios
import api from '../../services/api';

// Importando tipagem do Aor
import { Aors } from '../../types';

const Aor: React.FC = () => {
    // Adicionando item no DB
    async function addNewAor(data: Aors, { reset }: any) {
        await api
            .post('aors/create', { ...data })
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
            <Title>Cadastrar Aor</Title>
            <Form onSubmit={addNewAor}>
                <Field name="id" type="text" placeholder="Aor" />
                <Field name="contact" type="text" placeholder="Contato" />
                <Field name="max_contacts" type="text" placeholder="Máximo" />

                <Button type="submit" onClick={() => addNewAor}>
                    Enviar
                </Button>
            </Form>
        </>
    );
};

export default Aor;
