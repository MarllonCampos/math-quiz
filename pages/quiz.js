/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { QuizContainer } from './index';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import db from '../db.json';

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  useEffect(() => {
    setName(router.query.name);
  }, []);

  return (

    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Primeira Pergunta!</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Sabe essa {name}, vamos ver!</h1>

          </Widget.Header>
          <Widget.Content />

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
};
export default Page;
