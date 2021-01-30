/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import InputForm from '../src/components/InputForm';

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
            <InputForm />
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
