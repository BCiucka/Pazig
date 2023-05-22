import {Button, Card, CardContent, Typography,TextField,Tooltip} from '@mui/material';
import { Box } from '@mui/system'
import React, { useState } from 'react';

const questionsza = [
  {
    QnId: 1,
    Qs: "WPISZ CO REPREZENTUJE DANY MIG",
    GifName: "cz.mp4",
    ToolTip:"Przywitanie na C",
    Input: "",
    Answer: "Cześć"
  },
  {
    QnId: 2,
    Qs: "WPISZ CO REPREZENTUJE DANY MIG",
    GifName: "pa.mp4",
    ToolTip:"Pożegnanie na P",
    Input: "",
    Answer: "Pa"
  },
  {
    QnId: 3,
    Qs: "WPISZ CO REPREZENTUJE DANY MIG",
    GifName: "sz.mp4",
    ToolTip:"Bardzo dokładnie czyścić używając do tego siły. ",
    Input: "",
    Answer: "Szorować"
  },
  {
    QnId: 4,
    Qs: "WPISZ CO REPREZENTUJE DANY MIG",
    GifName: "wm.mp4",
    ToolTip:"Przerważnie mówi się to kiedy ktos na urodziny W,N",
    Input: "",
    Answer: "Wszystkiego najlepszego"
  },
  {
    QnId: 5,
    Qs: "WPISZ CO REPREZENTUJE DANY MIG",
    GifName: "aa.mp4",
    ToolTip:"Substancja, która może zniszczyć lub zahamować wydzielanie bakterii i innych mikroorganizmów w ciele",
    Input: "",
    Answer: "Antybiotyk"
  },
  {
    QnId: 6,
    Qs: "WPISZ CO REPREZENTUJE DANY MIG",
    GifName: "bb.mp4",
    ToolTip:"Przemieszczać się bardzo szybko na nogach",
    Input: "",
    Answer: "Biegać"
  },
  {
    QnId: 7,
    Qs: "WPISZ CO REPREZENTUJE DANY MIG",
    GifName: "an.mp4",
    ToolTip:"Chorobliwy brak łaknienia ",
    Input: "",
    Answer: "Anoreksja"
  },
  {
    QnId: 8,
    Qs: "WPISZ CO REPREZENTUJE DANY MIG",
    GifName: "dd.mp4",
    ToolTip:"Wąska deska z czterema rolkami, na której można jeździć i wykonywać ewolucje ",
    Input: "",
    Answer: "Deskorolka"
  },
  {
    QnId: 9,
    Qs: "WPISZ CO REPREZENTUJE DANY MIG",
    GifName: "gg.mp4",
    ToolTip:"Ćwiczenia fizyczne, wykonywane np. na drążku w celu rozwijania siły, muskulatury oraz kształtowaniu sylwetki.na G",
    Input: "",
    Answer: "Gimnastyka "
  },
  {
    QnId: 10,
    Qs: "WPISZ CO REPREZENTUJE DANY MIG",
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
    const [retakeMode, setRetakeMode] = useState(false);
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
//const shuffledQuestions = questionsza.sort(() => Math.random() - 0.5);
//const questionsza = shuffledQuestions[currentQuestion];
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
  resetButtonColors(); // Reset button colors
  const incorrectQuestionIndex = incorrectAnswers[0];
  setCurrentQuestion(incorrectQuestionIndex);
  setScore(0);
  setProgres2(incorrectQuestionIndex);
  setShowScore(false);
  setIncorrectAnswers(incorrectAnswers.slice(1));
  setRetakeMode(true);
 }
 const restartQuiz = () => {
  setCurrentQuestion(0);
  setScore(0);
  setProgres2(0);
  setShowScore(false);
  onProgressChange2(0);
  setIncorrectAnswers([]);
  setRetakeMode(false);
};
  
const renderQuestion = () => {
  const question = questionsza[currentQuestion];
  return (
    <div>
     <Typography variant='h6' style={{ display: "flex", justifyContent: "center", backgroundColor: '#385a63', padding: '20px', borderRadius: '10px', border: '2px solid #fff', fontFamily: 'Arial', color: "#fff", fontWeight: "bold", fontSize: "1.2rem" }}>{question.Qs}</Typography>
<div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
  <div style={{ display: "flex" }}>
    <video style={{ display: "inline-block", borderRadius: '10px',marginTop:'10px'}} src={questionsza[currentQuestion].GifName} autoPlay loop controls></video> 
  </div>
</div>

      <Box sx={{  display: 'flex', flexDirection: 'column', mt:2, backgroundColor: '#385a63',justifyContent: 'center', alignItems: 'center'  }}>
        <form onSubmit={handleAnswerSubmission}>
          <TextField
            value={userAnswer}
            onChange={handleUserAnswerChange}
            placeholder="Podaj Odpowiedź"
            className="answer-button animated-button"
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
          className="answer-button animated-button"
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
            Twój wynik to {score} na {questionsza.length}
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

  
  

  