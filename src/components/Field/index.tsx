import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
}

const Field: React.FC<InputProps> = ({ name, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, registerField } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);
    return (
        <Container>
            <input ref={inputRef} {...rest} />
        </Container>
    );
};

export default Field;
