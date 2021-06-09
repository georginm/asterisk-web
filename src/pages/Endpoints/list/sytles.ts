import styled from 'styled-components';

export const EndpointList = styled.div`
    margin-top: 80px;
    width: 100%;
    display: block;
    align-items: center;
`;

export const Title = styled.h1`
    margin-bottom: 80px;
    font-size: 48px;
    color: #3a3a3a;
`;

export const Form = styled.form`
    display: block;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    div {
        width: 80%;
        float: left;

        input {
            width: 100%;
        }
    }

    button {
        border-radius: 0;
        width: 20%;
    }
`;

export const Item = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

    transition: transform 0.3s;

    &:hover {
        transform: translateX(10px);
    }

    a {
        width: 100%;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 10px;
        color: #3d3d4d;
    }

    button {
        display: flex;
        justify-content: center;
        border-radius: 5px;
        margin: 5px;
        padding: 20px 10px;
        max-width: 70px;
        height: 100%;

        color: #fff;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.2s;
    }

    #informations {
        max-width: 100%;
        width: 90%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        strong {
            font-size: 18px;
            color: #3d3d4d;
        }

        p {
            font-size: 15px;
            color: #a8a8b3;
            margin-top: 4px;
        }
    }

    #delete {
        background: #ff6347;

        &:hover {
            background: #dc143c;
        }
    }

    #update {
        background: #00fa9a;
        &:hover {
            background: #66cdaa;
        }
    }
`;
