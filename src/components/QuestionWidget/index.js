/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import Widget from '../Widget';
import db from '../../../db.json';
import Button from '../Button';

function QuestionWidget({
  question, name, totalQuestions, questionIndex, onSubmit, ...props
}) {
  const router = useRouter();
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header style={{ flexDirection: 'column' }}>
        <h1>
          Sabe essa
          {' '}
          {router.query.name}
          ?
          Vamos ver!
        </h1>
        <h3 style={{ marginTop: '12px' }}>
          Pergunta
          {' '}
          {`${questionIndex + 1}`}
          {' '}
          de
          {' '}
          {`${db.questions.length}`}
        </h3>

      </Widget.Header>
      <img src={question.image} alt="Imagem Da Questão" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />

      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form onSubmit={(event) => { event.preventDefault(); onSubmit(); }}>
          {(question.alternatives)
            .map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;
              return (
                <Widget.Topic
                  as="label"
                  key={`idDo${alternative}`}
                  htmlFor={alternativeId}
                >

                  <input id={alternativeId} type="radio" style={{ display: 'none' }} name={questionId} />
                  {alternative}
                </Widget.Topic>
              );
            })}
          <Button type="submit">Confirmar</Button>
        </form>

      </Widget.Content>

    </Widget>
  );
}

export default QuestionWidget;
