import styled from 'styled-components';

export const Container = styled.button`
    margin-top: 20px;
    border-radius: 5px;
    padding: 2px 5px;
    width: 40%;
    height: 40px;
    background: #ffae30;
    color: #fdfefd;
    border: 0;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
        background: #ff9e30;
    }
`;
