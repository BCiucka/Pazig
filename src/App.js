import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import { Link } from 'react-router-dom';
import { progress } from './components/Quiz';



const questions = [
  {
    QnId: 1,
    Qs: "Który mig reprezentuje MASŁO",
    ImageName: "mas1.png",
    ImageName2: "mas2.png",
    ImageName3: "mas3.png",
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
    ImageName2: "bro2.png",
    ImageName3: "bro3.png",
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
    ImageName2: "grzy2.png",
    ImageName3: "grzy3.png",
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
    ImageName2: "march2.png",
    ImageName3: "march3.png",
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
    ImageName2: "anan2.png",
    ImageName3: "anan3.png",
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
    ImageName2: "gru2.png",
    ImageName3: "gru3.png",
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
    ImageName2: "jag2.png",
    ImageName3: "jag3.png",
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
    ImageName2: "wis2.png",
    ImageName3: "wis3.png",
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
    ImageName2: "orze2.png",
    ImageName3: "orze3.png",
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
    ImageName2: "bul2.png",
    ImageName3: "bul3.png",
    GifName: "bul.mp4",
    Option1: "Mig po lewej",
    Option2: "Mig po prawej",
    Answer:"Mig po prawej"
  }
];

function App() {

  
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
            <button style={{ backgroundColor: '#385a63', color: '#e2e9ea', borderRadius: '5px', padding: '20px', margin: '20px'}}>
              <img src="home.png"  style={{ height: '40px', marginRight: '10px' }} />
            </button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz1-page" element={<Quiz questions={questions} />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

function Home({}) {


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
        <button style={{ backgroundColor: '#f9a229', margin: '20px', padding: '20px', borderRadius: '10px' }}>
          <h2 style={{ color: '#e2e9ea', fontWeight: 'bold', margin: '0 auto' }}>Roszerzony</h2>

        </button>
        <button style={{ backgroundColor: '#d44a2d', margin: '20px', padding: '20px', borderRadius: '10px' }}>
          <h2 style={{ color: '#e2e9ea', fontWeight: 'bold', margin: '0 auto' }}>Zaawansowany</h2>

        </button>
        <footer style={{ backgroundColor: '#385a63', color: '#35474b', textAlign: 'center', padding: '10px', position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
        &copy; Bartosz Ciućka 2023 PJM App. All rights reserved.
      </footer>
      </div>
    </div>
  );
}


export default App;
