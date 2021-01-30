/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {
  Container, Form, Input, Button,
} from './styles';

const InputForm = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleInputName = (event) => {
    const nome = event.target.value;
    setName(nome);
  };

  const submitForm = (event) => {
    event.preventDefault();
    router.push({
      pathname: '/quiz',
      query: { name },

      // O router se vira para enviar para próxima página
    });
  };

  return (
    <Container>
      <Form onSubmit={submitForm}>
        <Input placeholder="Vamos brincar!" onChange={handleInputName} />
        <Button disabled={name.length === 0}>
          Jogar {name} !
        </Button>
      </Form>
    </Container>
  );
};
export default InputForm;
