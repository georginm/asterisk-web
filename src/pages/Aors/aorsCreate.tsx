import React from 'react';

/**
 * FC: Function Comonent
 */
const Aors: React.FC = () => {
    return (
        <>
            <h1>Aors</h1>
            <form>
                <input type="text" placeholder="Endpoint" />
                <input type="text" placeholder="Contact" />
                <input type="text" placeholder="Max Contacts" />
                <button type="submit">Cadastrar Aor</button>
            </form>
        </>
    );
};

export default Aors;
