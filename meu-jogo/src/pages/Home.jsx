import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  const [showDamas, setShowDamas] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showInputs, setShowInputs] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDamas(true);
    }, 2000);

    setTimeout(() => {
      setShowGame(true);
    }, 4000);

    setTimeout(() => {
      setShowInputs(true);
    }, 6000);
  }, []);

  return (
    <div className="container">
      <h1 className={showDamas ? 'show' : ''}>Ultimate</h1>
      <h1 className={showGame ? 'show' : ''}>Damas</h1>
      {showInputs && (
        <div>
          <h1 className="show">Game!</h1>
          <div className="input-container">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Apelido" />
            <select>
              <option value="Azul">Azul</option>
              <option value="Amarelo">Amarelo</option>
              <option value="Vermelho">Vermelho</option>
              <option value="Verde">Verde</option>
              <option value="Preto">Preto</option>
              <option value="Branco">Branco</option>
              <option value="Rosa">Rosa</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
