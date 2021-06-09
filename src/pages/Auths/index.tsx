import React from 'react';

// Lib da rocketseat para manipulação de formuário
import { Form } from '@unform/web';

// Importando componentes
import Button from '../../components/Button';
import Field from '../../components/Field';
import Title from '../../components/Title';

// Importando Api Axios
import api from '../../services/api';

// Importando tipagem do Auth
import { Auths } from '../../types';

const Auth: React.FC = () => {
    // Adicionando item no DB
    async function addNewAuth(data: Auths) {
        await api
            .post('auth/create', { ...data })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            <Title>Cadastrar Auth</Title>
            <Form onSubmit={addNewAuth}>
                <Field name="id" type="text" placeholder="Auth" />
                <Field
                    name="auth_type"
                    type="text"
                    placeholder="Tipo de Autenticação"
                />
                <Field
                    name="username"
                    type="text"
                    placeholder="Nome de Usuário"
                />
                <Field name="password" type="text" placeholder="Senhas" />

                <Button type="submit" onClick={() => addNewAuth}>
                    Cadastrar Auth
                </Button>
            </Form>
        </>
    );
};

export default Auth;
