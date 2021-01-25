import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

const Background = styled.div`
  background-image:url(${db.bg});
  flex:1;
  background-size:cover;
  background-position:top center;

`;


const QuizContainer = styled.section`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin: auto 10%;
  @media screen and(max-width:500px) {
    margin:auto;
    padding:15px;
  }


`;


export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>O quiz da matemágica</h1>

          </Widget.Header>
          <Widget.Content>
            <p>Começaremos agora o quiz da matemágica, bora ver ?</p>
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
        <GitHubCorner />
      
    </QuizBackground>
  )
}
