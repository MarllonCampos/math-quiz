/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Form from '../src/components/Form';

import db from '../db.json';

export const QuizContainer = styled.section`
  width:100%;
  max-width:400px;
  padding-top:45px;
  margin: auto 10%;
  @media (max-width:500px) {
    margin:0;
    padding:15px; 
  }
  


`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleHistoryPush = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Se apresente!</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>O quiz da matemágica</h1>

          </Widget.Header>
          <Widget.Content>
            <Form onSubmit={handleHistoryPush}>
              <Input value={name} onChange={(event) => setName(event.target.value)} placeholder="Vamos jogar" />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
                {' '}
                {name}
              </Button>
            </Form>
          </Widget.Content>

        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>

          </Widget.Header>
          <Widget.Content>
            <p>Veja alguns outros Quizes, do pessoal da do Discord!</p>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marlloncampos/math-quiz" />

    </QuizBackground>
  );
}
