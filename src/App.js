import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import React, { useState } from 'react';
import Quizabc from './components/Quizabc';
import Quiz from './components/Quiz';
import Quizza from './components/Quizza';
import { Link } from 'react-router-dom';
const questionsabc = [
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
    Answer: "Mig po prawej"
  }
];
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
    Answer: "Mig po prawej"
  },
  {
    QnId: 7,
    Qs: "Który mig reprezentuje JAGODA",
    ImageName: "jag1.png",

    GifName: "jag.mp4",
    GifName2: "jag2.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po lewej"
  },
  {
    QnId: 8,
    Qs: "Który mig reprezentuje WIŚNIA",
    ImageName: "wis1.png",

    GifName: "wis.mp4",
    GifName2: "ba.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer: "Mig po prawej"
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
    Answer: "Mig po prawej"
  }
];
const questionsza = [
  {
    QnId: 1,
    Qs: "Wpisz co reprezentuje dany mig",
    GifName: "cz.mp4",
    ToolTip: "Przywitanie na C",
    Input: "",
    Answer: "Cześć"
  },
  {
    QnId: 2,
    Qs: "Wpisz co reprezentuje dany mig",
    GifName: "pa.mp4",
    ToolTip: "Pożegnanie na P",
    Input: "",
    Answer: "Pa"
  },
  {
    QnId: 3,
    Qs: "Wpisz co reprezentuje dany mig",
    GifName: "sz.mp4",
    ToolTip: "bardzo dokładnie czyścić używając do tego siły. ",
    Input: "",
    Answer: "Szorować"
  },
  {
    QnId: 4,
    Qs: "Wpisz co reprezentuje dany mig",
    GifName: "wm.mp4",
    ToolTip: "Przerważnie mówi się to kiedy ktos na urodziny W,N",
    Input: "",
    Answer: "Wszystkiego najlepszego"
  },
  {
    QnId: 5,
    Qs: "Wpisz co reprezentuje dany mig",
    GifName: "aa.mp4",
    ToolTip: "substancja, która może zniszczyć lub zahamować wydzielanie bakterii i innych mikroorganizmów w ciele",
    Input: "",
    Answer: "Antybiotyk"
  },
  {
    QnId: 6,
    Qs: "Wpisz co reprezentuje dany mig",
    GifName: "bb.mp4",
    ToolTip: "przemieszczać się bardzo szybko na nogach",
    Input: "",
    Answer: "Biegać"
  },
  {
    QnId: 7,
    Qs: "Wpisz co reprezentuje dany mig",
    GifName: "an.mp4",
    ToolTip: "Chorobliwy brak łaknienia ",
    Input: "",
    Answer: "Anoreksja"
  },
  {
    QnId: 8,
    Qs: "Wpisz co reprezentuje dany mig",
    GifName: "dd.mp4",
    ToolTip: "Wąska deska z czterema rolkami, na której można jeździć i wykonywać ewolucje ",
    Input: "",
    Answer: "Deskorolka"
  },
  {
    QnId: 9,
    Qs: "Wpisz co reprezentuje dany mig",
    GifName: "gg.mp4",
    ToolTip: "ćwiczenia fizyczne, wykonywane np. na drążku w celu rozwijania siły, muskulatury oraz kształtowaniu sylwetki.",
    Input: "",
    Answer: "Gimnastyka "
  },
  {
    QnId: 10,
    Qs: "Wpisz co reprezentuje dany mig",
    GifName: "mm.mp4",
    ToolTip: "Zamaczać/ wystawiać na działanie wody. ",
    Input: "",
    Answer: "Moczyć"
  }
];
function App() {
  const [currentProgress1, setCurrentProgress1] = useState(0);

  const handleProgressChange1 = (newProgress1) => {
    setCurrentProgress1(newProgress1);
  };
  const [currentProgress, setCurrentProgress] = useState(0);

  const handleProgressChange = (newProgress) => {
    setCurrentProgress(newProgress);
  };
  const [currentProgress2, setCurrentProgress2] = useState(0);

  const handleProgressChange2 = (newProgress2) => {
    setCurrentProgress2(newProgress2);
  };

  return (
    <>
      <BrowserRouter>
        <div style={{
          backgroundColor: '#2b3232',
          padding: 0,
          height: '100vh'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            border: '2px solid #fff',
            overflow: 'hidden',
            backgroundColor: '#385a63',
            maxWidth: '2500px'
          }}>
            <div style={{
              backgroundColor: '#385a63',
              width: '80px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              position: 'absolute',
              left: '40px'
            }}>
              <div style={{ position: 'fixed', left: '30px' }}>
                <a href="https://www.slownikpjm.uw.edu.pl/page/opjm">
                  <img src="book.png" alt="Book icon" style={{
                    width: '220px',
                    height: '70px'
                  }} />
                </a>
              </div>
            </div>
            <h1 style={{
              margin: '0',
              color: '#e2e9ea',
              fontWeight: 'bold',
              fontSize: '62px',
              textTransform: 'uppercase',
              letterSpacing: '4px'
            }}>PJM APP</h1>
            <Link to="/" style={{ position: 'absolute', right: '40px' }}>
              <button style={{ backgroundColor: '#385a63', color: '#e2e9ea', borderRadius: '5px', padding: '20px', margin: '20px' }}>
                <img src="home.png" style={{ height: '40px', marginRight: '10px' }} />
              </button>
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px', width: '80%', margin: '0 auto', backgroundColor: '#e6e6e6', borderRadius: '10px', height: '20px' }}>
            <div style={{ position: 'relative', width: `${currentProgress1}%`, backgroundColor: '#0f99fd', borderRadius: '10px 0 0 10px', height: '100%' }}>
              <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>{currentProgress1}%</span>
            </div>
            <div style={{ position: 'relative', width: `${currentProgress}%`, backgroundColor: '#f9a229', borderRadius: '0', height: '100%' }}>
              <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>{currentProgress}%</span>
            </div>
            <div style={{ position: 'relative', width: `${currentProgress2}%`, backgroundColor: '#d44a2d', borderRadius: '0 10px 10px 0', height: '100%' }}>
              <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>{currentProgress2}%</span>
            </div>
          </div>


          <div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz1-page" element={<Quizabc questions={questionsabc} onProgressChange1={handleProgressChange1} />} />
            <Route path="/quiz2-page" element={<Quiz questions={questions} onProgressChange={handleProgressChange} />} />
            <Route path="/quiz3-page" element={<Quizza questions={questionsza} onProgressChange2={handleProgressChange2} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

function Home() {

  const [isLoading, setIsLoading] = useState(false);

  const handlePodstawowyClick = () => {
    setIsLoading(true);




  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '2px solid #fff', overflow: 'hidden', backgroundColor: '#e2e9ea', maxWidth: '800px', margin: '50px auto', height: '400px' }}>
      <h2 style={{ margin: '0', color: '#2b3232', fontWeight: 'bold', fontSize: '48px', textTransform: 'uppercase', letterSpacing: '4px' }}>Wybierz Poziom</h2>
      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <Link to="/quiz1-page">
          <button onClick={handlePodstawowyClick} style={{ backgroundColor: '#0f99fd', color: '#e2e9ea', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', borderRadius: '10px', padding: '20px', margin: '20px' }}>
            {isLoading ? 'Loading...' : ''}
            <h2 style={{ color: '#e2e9ea', fontWeight: 'bold', margin: '0 auto' }}>Podstawowy</h2>
          </button>
        </Link>

        <Link to="/quiz2-page">
          <button
            style={{
              backgroundColor: "#f9a229",
              color: "#e2e9ea",
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "2px",
              borderRadius: "10px",
              padding: "20px",
              margin: "20px",
            }}
          >
            <h2 style={{ color: "#e2e9ea", fontWeight: "bold", margin: "0 auto" }}>
              Roszerzony
            </h2>
          </button>
        </Link>

        <Link to="/quiz3-page">
          <button style={{ backgroundColor: '#d44a2d', color: '#e2e9ea', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', borderRadius: '10px', padding: '20px', margin: '20px' }}>
            <h2 style={{ color: '#e2e9ea', fontWeight: 'bold', margin: '0 auto' }}>Zaawansowany</h2>
          </button>
        </Link>
        <footer style={{ backgroundColor: '#385a63', color: '#35474b', textAlign: 'center', padding: '10px', position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
          &copy; Bartosz Ciućka 2023 PJM App. All rights reserved.
        </footer>
      </div>
    </div>
  );
}


export default App;
