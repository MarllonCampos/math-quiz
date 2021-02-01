/* eslint-disable react/prop-types */
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

import Button from '../src/components/Button';

import db from '../db.json';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando ...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question, name, totalQuestions, questionIndex, ...props
}) {
  return (
    <Widget>
      <Widget.Header style={{ flexDirection: 'column' }}>
        <h1>Sabe essa {name}, vamos ver!</h1>
        <h3 style={{ marginTop: '12px' }}>Pergunta {`${questionIndex + 1}`} de {`${db.questions.length}`}</h3>

      </Widget.Header>
      <img src={question.image} alt="Imagem Da Questão" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        {(question.alternatives)
          .map((item) => <Button style={{ marginBottom: '12px', backgroundColor: '#003c6c' }} value={item}>{item} </Button>)}
        <Button type="submit">Confirmar</Button>
      </Widget.Content>

    </Widget>
  );
}

const Page = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const totalQuestions = db.questions.length;
  const questionIndex = 0;
  const question = db.questions[questionIndex];

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
        <QuestionWidget
          question={question}
          totalQuestions={totalQuestions}
          questionIndex={questionIndex}
        />
        <Widget>

          <Widget.Header>
            <h1>Quizes da Galera</h1>

          </Widget.Header>
          <Widget.Content>
            <p>Veja alguns outros Quizes, do pessoal da do Discord!</p>
          </Widget.Content>

        </Widget>

        <LoadingWidget />
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marlloncampos/math-quiz" />

    </QuizBackground>

  );
};
export default Page;
