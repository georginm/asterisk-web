import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <button type="button" {...rest}>
        {children}
    </button>
);

export default Button;
// import { MdDelete } from 'react-icons/md';
// import { Delete } from './style';
// import api from '../../services/api';
// async function deleteEndpoint() {
//     await api.delete(`endpoint/${id}`);
// }
// return (
//     <Delete onClick={deleteEndpoint} href="endpoint/list">
//         <MdDelete size={25} />
//     </Delete>
// );
