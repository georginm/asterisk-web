import React from 'react';

// Lib da rocketseat para manipulação de formuário
import { Form } from '@unform/web';

// Importando componentes
import Button from '../../components/Button';
import Field from '../../components/Field';
import Title from '../../components/Title';

// Importando Api Axios
import api from '../../services/api';

// Importando Typagem do Endpoint
import { Endpoints } from '../../types';

const Endpoint: React.FC = () => {
    // Adicionando item no DB
    async function addNewEndpoint(data: Endpoints) {
        await api
            .post('endpoint/create', { ...data })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <Title>Cadastrar Endpoint</Title>
            <Form onSubmit={addNewEndpoint}>
                <Field name="id" type="text" placeholder="Endpoint" />
                <Field name="transport" type="text" placeholder="Transport" />
                <Field name="context" type="text" placeholder="Context" />
                <Field name="disallow" type="text" placeholder="Disallow" />
                <Field name="allow" type="text" placeholder="Allow" />
                <Field
                    name="direct_media"
                    type="text"
                    placeholder="Direct Media"
                />
                <Field name="auth" type="text" placeholder="Auth" />
                <Field name="aors" type="text" placeholder="Aors" />
                {/* Adicionar argumento da função a seguir */}
                <Button type="submit" onClick={() => addNewEndpoint}>
                    Cadastrar Endpoint
                </Button>
            </Form>
        </>
    );
};

export default Endpoint;
