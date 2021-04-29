import styled from 'styled-components';
import Advice from './Advice';
import {GoMarkGithub} from 'react-icons/go'

function App() {
  return (
    <Container>
      <BlurWrapper>
        <Advice/>
      </BlurWrapper>
      <GithubIconWrapper>
        <a href="https://github.com/mohammira/Random-Advice"
          title="See the code on Github!"
          target="_blank">
          <GithubIcon size="25px"/>
        </a>
      </GithubIconWrapper>
    </Container>
  );
}

export default App;

const Container = styled.div`
  /* background: rgb(163,188,249);
  background: linear-gradient(225deg, rgba(163,188,249,1) 0%, rgba(119,150,203,1) 66%, rgba(209,210,249,1) 100%); */
  background: rgb(163,188,249);
  background: linear-gradient(225deg, rgba(163,188,249,1) 0%, rgba(119,150,203,1) 39%, rgba(209,210,249,1) 100%); 
  overflow: auto;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  
`;
const BlurWrapper = styled.div`
  margin-top: 150px;
  background: rgb(255,255,255,0.2);
  height: 60%;
  width: 30%;
  border-radius: 8px;
  /* box-shadow: 0px 0px 20px 10px #292929; */
  
  @keyframes fadeIn{
        0% {
        opacity: 0;
        transform: translateY(-10px);
        }
        100% { 
        opacity: 1;
        transform: translateY(0px);
        }
    }
    animation: fadeIn 2s;
`;

const GithubIconWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  @keyframes fadeIn{
        0% {
        opacity: 0;
        transform: translateY(-10px);
        }
        100% { 
        opacity: 1;
        transform: translateY(0px);
        }
    }
    animation: fadeIn 2s;
`;

const GithubIcon = styled(GoMarkGithub)`
  color: #576490;
  
  :hover{
    color: #363E59;
    transform: translateY(3px);
  }
`;