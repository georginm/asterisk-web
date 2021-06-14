import styled from 'styled-components';

export const Img = styled.img`
    height: 30px;
`;

export const Component = styled.div`
    margin: 0;
    padding: 0;
    div {
        width: 200px;
    }

    nav {
        width: 100%;
        height: 50px;
        margin-bottom: 80px;
        /* display: flex;
        margin-top: 5px;
        justify-content: space-around; */

        ul {
            list-style: none;
            position: relative;
        }

        ul li {
            /* width: 150px; */
            float: left;
            &:hover ul {
                visibility: visible;
            }

            &:hover ul a {
                background-color: #fff;
            }
        }

        ul ul {
            position: absolute;
            visibility: hidden;
        }

        a {
            padding: 15px;
            display: block;
            margin-left: 10px;
            text-decoration: none;
            align-items: center;
            background-color: #f0f0f5;
            color: #000;

            &:hover {
                background-color: #fff;
                color: #000;
            }
        }

        ul ul li {
            float: none;
        }
    }
`;
