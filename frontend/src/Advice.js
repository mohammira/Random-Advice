import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Advice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advice: null,
            clicked: false
         }
    }
    getAdvice = () => {
        axios.get('/getadvice').then(response => {
            this.setState({
                advice: response.data.advice,
                clicked: true
            })
            console.log("Clicked!")
        })
    }
    render() { 
        return ( 
            <Container>
                <h1>Need some advice?</h1>
                <button onClick={this.getAdvice}>Click</button>
                <AdviceWrapper>
                    {this.state.clicked
                        ? <h2>{this.state.advice}</h2>
                        : null
                    }
                </AdviceWrapper>
                
            </Container>
         );
    }
}
 
export default Advice;

const Container = styled.div`
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;

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

    h1{
        color: #292929;
        font-size: 30px;
        text-align: center;
    }
    button{
        width: 70px;
        height: 40px;
        border: 2px #576490 solid;
        border-radius: 8px;
        background-color: white;
        color: #576490;
        font-size: 17px;
        font-family: 'Lato';

        &:hover{
            border: 2px white solid;
            border-radius: 8px;
            background-color: #576490;
            color: white;
            /* transform: translateY(-3px); */
        }
    }
`;

const AdviceWrapper = styled.div` 
    h2{
        margin-top: 40px;
        padding: 0px 25px;
        font-size: 30px;
        font-family: 'Work Sans';
        text-align: center;
        color: #292929;
        white-space:normal;
    }
`;


