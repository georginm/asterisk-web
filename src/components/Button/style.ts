import styled from 'styled-components';

export const Delete = styled.button`
    display: flex;
    background: #ff6347;
    max-width: 70px;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 5px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.2s;
    padding: 20px 10px;

    &:hover {
        background: #dc143c;
    }
`;
