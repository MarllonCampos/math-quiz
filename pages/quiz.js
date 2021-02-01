/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { QuizContainer } from './index';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuestionWidget from '../src/components/QuestionWidget';

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

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

const Page = () => {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = db.questions[currentQuestion];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  const handleSubmitForm = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (

    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Primeira Pergunta!</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.QUIZ
          && (
          <QuestionWidget
            question={question}
            totalQuestions={totalQuestions}
            questionIndex={currentQuestion}
            onSubmit={handleSubmitForm}
          />
          )}

        {screenState === screenStates.RESULT && <div>FUNCIONOU</div>}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/marlloncampos/math-quiz" />

    </QuizBackground>

  );
};
export default Page;
