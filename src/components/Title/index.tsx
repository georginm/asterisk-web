import React from 'react';
import Container from './styles';

const Title: React.FC = ({ children }) => (
    <Container>
        <h1>{children}</h1>
    </Container>
);

export default Title;
