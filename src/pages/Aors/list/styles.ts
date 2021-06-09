import styled from 'styled-components';

export const AorsList = styled.div`
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

        strong {
            width: 40px;
        }
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
        /* flex-direction: column;
        padding-left: 40px; */
        align-items: center;
        float: right;

        div {
            width: 50%;
            display: flex;
            flex-direction: column;
            padding-left: 30px;

            strong {
                width: 100%;
            }
        }

        strong {
            font-size: 16px;
            color: #4f4f4f;
        }

        p {
            margin-left: 40px;
            float: right;
            font-size: 16px;
            color: #a8a8b3;
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
