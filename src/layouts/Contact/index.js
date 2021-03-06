import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import HeaderSection from './../../reusable/HeaderSection';
import Form from './Form';
import { Container } from './styles';

export default function Contact() {
    return (
        <>
            <Container id="contact">
                <HeaderSection content="Contate-me" icon={<FaEnvelope color="#fff" size={34} />} />
                <Form />
            </Container>
        </>
    );
}
