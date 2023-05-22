import {Button, Card, CardContent, Typography,TextField,Tooltip} from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react';

const questions = [
  {
    QnId: 1,
    Qs: "Który mig reprezentuje MASŁO",
    ImageName: "mas1.png",
 
    GifName: "maslogif.mp4",
    GifName2: "masloogif.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 2,
    Qs: "Który mig reprezentuje BROKUŁ",
    ImageName: "bro1.png",

    GifName: "brok.mp4",
    GifName2: "61539.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 3,
    Qs: "Który mig reprezentuje GRZYB",
    ImageName: "grzy1.png",

    GifName: "grzyb.mp4",
    GifName2: "grzy.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 4,
    Qs: "Który mig reprezentuje MARCHEWKA",
    ImageName: "march1.png",
 
    GifName: "march.mp4",
    GifName2: "march2.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 5,
    Qs: "Który mig reprezentuje ANANAS",
    ImageName: "anan1.png",

    GifName: "anan.mp4",
    GifName2: "anan2.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 6,
    Qs: "Który mig reprezentuje GRUSZKA",
    ImageName: "gru1.png",

    GifName: "gru.mp4",
    GifName2: "gru2.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 7,
    Qs: "Który mig reprezentuje JAGODA",
    ImageName: "jag1.png",

    GifName: "jag.mp4",
    GifName2: "jag2.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po prawej"
  },
  {
    QnId: 8,
    Qs: "Który mig reprezentuje WIŚNIA",
    ImageName: "wis1.png",

    GifName: "wis.mp4",
    GifName2: "ba.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 9,
    Qs: "Który mig reprezentuje ORZECH LASKOWY",
    ImageName: "orze1.png",

    GifName: "orze.mp4",
    GifName2: "orze2.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 10,
    Qs: "Który mig reprezentuje BUŁKA",
    ImageName: "bul1.png",
    GifName: "bul.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer:"Mig po prawej"
  }
];


  export default function Quiz({onProgressChange}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [progress,setProgres]= useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
     const [retakeMode, setRetakeMode] = useState(false);
    const resetButtonColors = () => {
      const buttons = document.querySelectorAll(".answer-button");
      buttons.forEach((button) => {
        button.style.backgroundColor = "#fff";
      });
    };
    
    //const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
//const questions = shuffledQuestions[currentQuestion];
   const handleAnswerOptionClick = (selectedOption, event) => {
    resetButtonColors();
    const isCorrect = selectedOption === questions[currentQuestion].Answer;
    if (  isCorrect) {
      setScore(score + 1);
      if (progress < questions.length - 1) {
        setProgres(progress + 1);
        onProgressChange((progress + 1) / questions.length * 100);
      }
      event.target.style.backgroundColor = "green";
    } else {
      event.target.style.backgroundColor = "red";
      setIncorrectAnswers([...incorrectAnswers, currentQuestion]);
    }


      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion)
      } else {
        setShowScore(true);
      }
    };

    const handleRetake = () => {
      resetButtonColors(); // Reset button colors
      const incorrectQuestionIndex = incorrectAnswers[0];
      setCurrentQuestion(incorrectQuestionIndex);
      setScore(0);
      setProgres(incorrectQuestionIndex);
      setShowScore(false);
      setIncorrectAnswers(incorrectAnswers.slice(1));
      setRetakeMode(true);
    };
    
    const restartQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setProgres(0);
      setShowScore(false);
      onProgressChange(0);
      setIncorrectAnswers([]);
      setRetakeMode(false);
    };
    
    const renderQuestion = () => {
      const question = questions[currentQuestion];

      return (
        <div>
<Typography variant='h6' style={{ display: "flex", justifyContent: "center", backgroundColor: '#385a63', padding: '10px', borderRadius: '10px', border: '2px solid #fff', fontFamily: 'Arial', color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>{question.Qs}</Typography>
<div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
  <div style={{ display: "flex", borderRadius: '10px', border: '2px solid #fff', marginTop: '10px' }}>
    <img src={questions[currentQuestion].ImageName} style={{ width: '170px', height: '120px', marginTop: '10px' }} />
  </div>
  <div style={{ display: 'flex', marginTop: '20px' }}>
    <div style={{ flex: '1', marginRight: '8px' }}>
      <video style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} src={questions[currentQuestion].GifName} autoPlay loop controls></video>
    </div>
    <div style={{ flex: '1', marginLeft: '8px' }}>
      <video style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} src={questions[currentQuestion].GifName2} autoPlay loop controls></video>
    </div>
  </div>
</div>

<div>


</div>

    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, backgroundColor: '#385a63', borderRadius: '10px', border: '2px solid #fff', justifyContent: 'center', alignItems: 'center' }}>
      <Button
       className="answer-button animated-button"
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
       className="answer-button animated-button"
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
      let videoUrl = "";
    
      if (score <= 3 ) {
        videoUrl = "ss.mp4";
      } else if (score <= 5 ) {
        videoUrl = "tak.mp4";
      } else if (score <= 7) {
        videoUrl = "dobra.mp4";
      }
    
      return (
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: '#385a63',
          padding: '10px',
          borderRadius: '10px',
          border: '2px solid #fff',
          position: 'relative'
        }}>
          {!retakeMode && (
            <Typography variant='h6'>
              <h1 style={{
                margin: '0',
                color: '#e2e9ea',
                fontWeight: 'bold',
                fontSize: '22px',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                Twój wynik to {score} na {questions.length}
              </h1>
            </Typography>
          )}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {(
              <Button
                className="animated-button"
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
                onClick={restartQuiz}
              >
                Restart
              </Button>
            )}
            <Button
              className="animated-button"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "60px",
                width: "110px",
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
          {!retakeMode && videoUrl && (
            <div style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '56.25%', /* 16:9 aspect ratio */
              overflow: 'hidden',
              borderRadius: '10px',
              marginTop: '20px'
            }}>
              <video
                src={videoUrl}
                autoPlay
                loop
                controls
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </div>
          )}
        </div>
      );
    };
    
    
    
      
              
            
          
  
  
  
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
  


  