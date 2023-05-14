import {Button, Card, CardContent, Typography} from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react';
const questionsabc = [
  {
    QnId: 1,
    Qs: "Który mig reprezentuje litere A",
    ImageName: "A1.png",
    ImageName2: "A2.png",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 2,
    Qs: "Który mig reprezentuje litere C",
    ImageName: "C1.png",
    ImageName2: "C2.png",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 3,
    Qs: "Który mig reprezentuje litere F",
    ImageName: "F1.png",
    ImageName2: "F2.png",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 4,
    Qs: "Który mig reprezentuje litere G",
    ImageName: "G1.png",
    ImageName2: "G2.png",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 5,
      Qs: "Który mig reprezentuje litere L",
    ImageName: "L1.png",
    ImageName2: "L2.png",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  }
];


export default function Quizabc({onProgressChange1}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [progress1,setProgres1]= useState(0);
  const [showScore, setShowScore] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const resetButtonColors = () => {
    const buttons = document.querySelectorAll(".answer-button");
    buttons.forEach((button) => {
      button.style.backgroundColor = "#fff";
    });
  };
  
  
  const handleAnswerOptionClick = (selectedOption, event) => {
    resetButtonColors();
    const isCorrect = selectedOption === questionsabc[currentQuestion].Answer;
    if (isCorrect) {
      setScore(score + 1);
      if (progress1 < questionsabc.length - 1) {
        setProgres1(progress1+1);
        onProgressChange1((progress1+1)/questionsabc.length*100);
      }
      event.target.style.backgroundColor = "green";
    } else {
      event.target.style.backgroundColor = "red";
      setIncorrectAnswers([...incorrectAnswers, currentQuestion]);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsabc.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(incorrectAnswers[0]);
    setScore(0);
    setProgres1(0);
    setShowScore(false);
    setIncorrectAnswers(incorrectAnswers.slice(1));
  };
  
  
  
  const renderQuestion = () => {
    const question = questionsabc[currentQuestion];

    return (
      <div>
<Typography variant='h6' style={{display: "flex", justifyContent: "center", backgroundColor: '#385a63', padding: '10px', borderRadius: '10px', border: '2px solid #fff', fontFamily: 'Arial', color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>{question.Qs}</Typography>
<div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
<div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
  <div style={{display: "flex"}}>
    <img src={questionsabc[currentQuestion].ImageName} style={{width: '170px', height: '220px', marginRight: '10px'}} />   
    <img src={questionsabc[currentQuestion].ImageName2} style={{width: '170px', height: '220px', marginLeft: '10px'}} />
  </div>
</div>
</div>

  <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, backgroundColor: '#385a63', borderRadius: '10px', border: '2px solid #fff', justifyContent: 'center', alignItems: 'center' }}>
    <Button
      className="answer-button"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        width: "610px",
        borderRadius: "8px",
        backgroundColor: "#fff",
        color: "#385a63",
        fontWeight: "bold",
        fontSize: "1.2rem",
        cursor: "pointer",
        border: '2px solid #fff'
      }}
      onClick={(event) => handleAnswerOptionClick(question.Option1, event)}>
      {question.Option1}
    </Button>
    <Button
      className="answer-button"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        width: "610px",
        borderRadius: "8px",
        backgroundColor: "#fff",
        color: "#385a63",
        fontWeight: "bold",
        fontSize: "1.2rem",
        cursor: "pointer",
        border: '2px solid #fff'
      }} onClick={(event) => handleAnswerOptionClick(question.Option2, event)}>
      {question.Option2}
    </Button>
  </Box>
      </div>
    );
  };

  const renderResult = () => {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: '#385a63',
        padding: '10px',
        borderRadius: '10px',
        border: '2px solid #fff'
      }}>
        <Typography variant='h6'>
          <h1 style={{
            margin: '0',
            color: '#e2e9ea',
            fontWeight: 'bold',
            fontSize: '22px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Twój wynik to  {score} na {questionsabc.length} 
          </h1>

        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60px",
            width: "100px",
            borderRadius: "8px",
            backgroundColor: "#fff",
            color: "#385a63",
            fontWeight: "bold",
            fontSize: "1.2rem",
            cursor: "pointer",
            border: '2px solid #fff'
          }}
          onClick={() => window.location.reload()}
        >
          Restart
        </Button>
        <Button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
          width: "100px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          color: "#385a63",
          fontWeight: "bold",
          fontSize: "1.2rem",
          cursor: "pointer",
          border: '2px solid #fff',
          marginLeft: "20px",
        }}
        onClick={handleRetake}
      >
        Powtórz
      </Button>
      </div>
      </div>
    );
        }

  return (
    <Card sx={{ maxWidth: 640, backgroundColor: '#385a63', borderRadius: '10px', border: '2px solid #fff', mx: 'auto', mt: 5 }}>
      <CardContent>
        {showScore ? renderResult() : renderQuestion()}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>

        </Typography>
      </CardContent>
    </Card>
  );
}
  
  

  