import React from 'react';

// Lib da rocketseat para manipulação de formuário
import { Form } from '@unform/web';

// Importando componentes
import Button from '../../components/Button';
import Field from '../../components/Field';
import Title from '../../components/Title';

// Importando Api Axios
import api from '../../services/api';

// Importando Typagem do Extension
import { Extensions } from '../../types';

const Extension: React.FC = () => {
    // Adicionando item no DB
    async function addNewExtension(data: Extensions, { reset }: any) {
        await api
            .post('extensions/create', { ...data })
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
            <Title>Cadastrar Extension</Title>
            <Form onSubmit={addNewExtension}>
                <Field name="id" type="text" placeholder="Extension" />
                <Field name="exten" type="text" placeholder="exten" />
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
                <Button type="submit" onClick={() => addNewExtension}>
                    Cadastrar Extension
                </Button>
            </Form>
        </>
    );
};

export default Extension;
