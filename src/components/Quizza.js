import {Button, Card, CardContent, Typography,TextField,Tooltip} from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react';

const questionsza = [
  {
    QnId: 1,
    Qs: "Wpisz co reprezentuje dany MIG",
    GifName: "cz.mp4",
    ToolTip:"Przywitanie na C",
    Input: "",
    Answer: "Cześć"
  },
  {
    QnId: 2,
    Qs: "Wpisz co reprezentuje dany MIG",
    GifName: "pa.mp4",
    ToolTip:"Pożegnanie na P",
    Input: "",
    Answer: "Pa"
  },
  {
    QnId: 3,
    Qs: "Wpisz co reprezentuje dany MIG",
    GifName: "sz.mp4",
    ToolTip:"Bardzo dokładnie czyścić używając do tego siły. ",
    Input: "",
    Answer: "Szorować"
  },
  {
    QnId: 4,
    Qs: "Wpisz co reprezentuje dany MIG",
    GifName: "wm.mp4",
    ToolTip:"Przerważnie mówi się to kiedy ktos na urodziny W,N",
    Input: "",
    Answer: "Wszystkiego najlepszego"
  },
  {
    QnId: 5,
    Qs: "Wpisz co reprezentuje dany MIG",
    GifName: "aa.mp4",
    ToolTip:"Substancja, która może zniszczyć lub zahamować wydzielanie bakterii i innych mikroorganizmów w ciele",
    Input: "",
    Answer: "Antybiotyk"
  },
  {
    QnId: 6,
    Qs: "Wpisz co reprezentuje dany MIG",
    GifName: "bb.mp4",
    ToolTip:"Przemieszczać się bardzo szybko na nogach",
    Input: "",
    Answer: "Biegać"
  },
  {
    QnId: 7,
    Qs: "Wpisz co reprezentuje dany MIG",
    GifName: "an.mp4",
    ToolTip:"Chorobliwy brak łaknienia ",
    Input: "",
    Answer: "Anoreksja"
  },
  {
    QnId: 8,
    Qs: "Wpisz co reprezentuje dany MIG",
    GifName: "dd.mp4",
    ToolTip:"Wąska deska z czterema rolkami, na której można jeździć i wykonywać ewolucje ",
    Input: "",
    Answer: "Deskorolka"
  },
  {
    QnId: 9,
    Qs: "Wpisz co reprezentuje dany MIG",
    GifName: "gg.mp4",
    ToolTip:"Ćwiczenia fizyczne, wykonywane np. na drążku w celu rozwijania siły, muskulatury oraz kształtowaniu sylwetki.na G",
    Input: "",
    Answer: "Gimnastyka "
  },
  {
    QnId: 10,
    Qs: "Wpisz co reprezentuje dany MIG",
    GifName: "mm.mp4",
    ToolTip:"Zamaczać/ wystawiać na działanie wody. ",
    Input: "",
    Answer: "Moczyć"
  }
];


  export default function Quizza({onProgressChange2}) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [progress2,setProgres2]= useState(0);
    const [showScore, setShowScore] = useState(false);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);

    const resetButtonColors = () => {
      const buttons = document.querySelectorAll(".answer-button");
      buttons.forEach((button) => {
        button.style.backgroundColor = "#fff";
      });
    };
    
    
    const [userAnswer, setUserAnswer] = useState("");

const handleUserAnswerChange = (event) => {
  setUserAnswer(event.target.value);
};

const handleAnswerSubmission = (event) => {
  event.preventDefault();
  resetButtonColors();
  const isCorrect = userAnswer.toLowerCase() === questionsza[currentQuestion].Answer.toLowerCase();
  if (isCorrect) {
    setScore(score + 1);
    if (progress2 < questionsza.length - 1) {
      setProgres2(progress2+1);
      onProgressChange2((progress2+1)/questionsza.length*100);
    }
    event.target.style.backgroundColor = "green";
  } else {
    event.target.style.backgroundColor = "red";
    setIncorrectAnswers([...incorrectAnswers, currentQuestion]);
  }

  const nextQuestion = currentQuestion + 1;
  if (nextQuestion < questionsza.length) {
    setCurrentQuestion(nextQuestion);
    setUserAnswer("");
  } else {
    setShowScore(true);
  }
};

 const handleRetake = () => {
    setCurrentQuestion(incorrectAnswers[0]);
    setScore(0);
    setShowScore(false);
    setIncorrectAnswers(incorrectAnswers.slice(1));
  };
  
  
  
const renderQuestion = () => {
  const question = questionsza[currentQuestion];
  return (
    <div>
      <Typography variant='h6' style={{display: "flex", justifyContent: "center", backgroundColor: '#385a63', padding: '20px', borderRadius: '10px', border: '2px solid #fff', fontFamily: 'Arial', color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>{question.Qs}</Typography>
      <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
        <div style={{display: "flex"}}>
          <video style={{display: "inline-block"}} src={questionsza[currentQuestion].GifName} autoPlay loop controls></video> 
        </div>
      </div>
      <Box sx={{  display: 'flex', flexDirection: 'column', mt:2, backgroundColor: '#385a63',justifyContent: 'center', alignItems: 'center'  }}>
        <form onSubmit={handleAnswerSubmission}>
          <TextField
            value={userAnswer}
            onChange={handleUserAnswerChange}
            placeholder="Podaj Odpowiedź"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60px",
              width: "610px",
              borderRadius: "221px",
              backgroundColor: "#fff",
              color: "#385a63",
              fontWeight: "bold",
              fontSize: "1.2rem",
              cursor: "pointer",
              border: '4px solid #fff',
              textAlign: 'center'
            }}
          />
          <Tooltip title={questionsza[currentQuestion].ToolTip} style={{
              display: "flex", justifyContent: "center",width:'300px', fontFamily: 'Arial', color: "#fff", fontWeight: "bold", fontSize: "1.2rem",
            }}>
          <Button
            type="submit"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60px",
              width: "610px",
              borderRadius: "221px",
              backgroundColor: "#fff",
              color: "#385a63",
              fontWeight: "bold",
              fontSize: "1.2rem",
              cursor: "pointer",
              border: '4px solid #fff',
              marginTop: "10px",
            }}
          >
            Sprawdź
          </Button>
          </Tooltip>
        </form>
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
            Twój wynik to  {score} na {questionsza.length} 
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
          border: '5px solid #fff',
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
  
  

  