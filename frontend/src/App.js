import styled from 'styled-components';
import Advice from './Advice';
import {GoMarkGithub} from 'react-icons/go'

function App() {
  return (
    <Container>
      <BlurWrapper>
        <Advice/>
      </BlurWrapper>
      <a href="https://github.com/mohammira/Random-Advice"
          title="See the code on Github!"
          target="_blank">
          <GithubIcon size="25px"/>
      </a>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background: rgb(163,188,249);
  background: linear-gradient(333deg, rgba(163,188,249,1) 16%, rgba(119,150,203,1) 45%, rgba(209,210,249,1) 73%);
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
  background: rgb(255,255,255,0.15);
  height: 60%;
  width: 30%;
  border-radius: 8px;
  animation: fadeIn 2s;

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

  @media (max-width: 812px){
    /* overflow: auto; */
    position: absolute;
    height: 100%;
    width: 100%;
    margin-top: 0px;
  }

`;

const GithubIcon = styled(GoMarkGithub)`
  color: #576490;
  margin-top: 20px;
  animation: fadeIn 2s;

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
  
  :hover{
    color: #363E59;
    transform: translateY(3px);
  }
  @media (max-width: 812px){
    display:none;
  }
`;
