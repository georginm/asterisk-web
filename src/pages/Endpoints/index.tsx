import React from 'react';

/**
 * FC: Function Comonent
 */
const Endpoints: React.FC = () => {
    return (
        <>
            <h1>Endpoint</h1>
            <form>
                <input type="text" placeholder="Endpoint" />
                <input type="text" placeholder="Transport" />
                <input type="text" placeholder="Context" />
                <input type="text" placeholder="Disallow" />
                <input type="text" placeholder="Allow" />
                <input type="text" placeholder="Direct Media" />
                <input type="text" placeholder="Auth" />
                <input type="text" placeholder="Aors" />

                <button type="submit">Cadastrar Endpoint</button>
            </form>
        </>
    );
};

export default Endpoints;
