import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Quiz from './components/Quiz';
import Result from './components/Result';
import React, { useState } from 'react';

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  return (
    <><div style={{ backgroundColor: '#2b3232', padding: 0, height: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '2px solid #fff', overflow: 'hidden', backgroundColor: '#385a63', maxWidth: '2500px' }}>
        <div style={{ backgroundColor: '#385a63', width: '80px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', position: 'absolute', left: '40px' }}>
          <div style={{ position: 'fixed', left: '30px' }}>
            <a href="https://www.slownikpjm.uw.edu.pl/page/opjm">
              <img src="book.png" alt="Book icon" style={{ width: '220px', height: '70px' }} />
            </a>
          </div>
        </div>
        <h1 style={{ margin: '0', color: '#e2e9ea', fontWeight: 'bold', fontSize: '62px', textTransform: 'uppercase', letterSpacing: '4px' }}>PJM APP</h1>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', border: '2px solid #fff', overflow: 'hidden', backgroundColor: '#e2e9ea', maxWidth: '800px', margin: '50px auto', height: '400px' }}>
        <h2 style={{ margin: '0', color: '#2b3232', fontWeight: 'bold', fontSize: '48px', textTransform: 'uppercase', letterSpacing: '4px' }}>Wybierz Poziom</h2>
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <button
            style={{ backgroundColor: '#0f99fd', margin: '20px', padding: '20px', borderRadius: '10px' }}
            onClick={() => setStartQuiz(true)}
          >
            <h2 style={{ color: '#e2e9ea', fontWeight: 'bold', margin: '0 auto' }}>Podstawowy</h2>
            <progress value="0" max="100" />
          </button>

          <button style={{ backgroundColor: '#f9a229', margin: '20px', padding: '20px', borderRadius: '10px' }}>
            <h2 style={{ color: '#e2e9ea', fontWeight: 'bold', margin: '0 auto' }}>Roszerzony</h2>
            <progress value="0" max="100" />
          </button>
          <button style={{ backgroundColor: '#d44a2d', margin: '20px', padding: '20px', borderRadius: '10px' }}>
            <h2 style={{ color: '#e2e9ea', fontWeight: 'bold', margin: '0 auto' }}>Zaawansowany</h2>
            <progress value="0" max="100" />
          </button>
        </div>
      </div>
      <footer style={{ backgroundColor: '#385a63', color: '#35474b', textAlign: 'center', padding: '10px', position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
        &copy; Bartosz Ciućka 2023 PJM App. All rights reserved.
      </footer>
    </div><BrowserRouter>
       {startQuiz ? (
  <Quiz />
) : (
  <Routes>
    <Route path="/result" element={<Result />} />
  </Routes>
)}
      </BrowserRouter></>
  );
}

export default App;
