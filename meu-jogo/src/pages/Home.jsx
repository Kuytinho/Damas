import React, { useState, useEffect, useContext } from 'react';
import '../styles/Home.css';
import Context from '../Provider/Context';

function Home() {
  const [showDamas, setShowDamas] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [showInputs, setShowInputs] = useState(false);
  const { setUser } = useContext(Context); 

  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [color, setColor] = useState('');

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

  const handleSave = () => {
    const updatedUser = {
      name: name,
      nickname: nickname,
      color: color,
    };

    setUser(updatedUser); // Atualiza o estado user no contexto
  };

  return (
    <div className="container">
      <h1 className={showDamas ? 'show' : ''}>Ultimate</h1>
      <h1 className={showGame ? 'show' : ''}>Damas</h1>
      {showInputs && (
        <div>
          <h1 className="show">Game!</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Apelido"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <select value={color} onChange={(e) => setColor(e.target.value)}>
              <option value="Azul">Azul</option>
              <option value="Amarelo">Amarelo</option>
              <option value="Vermelho">Vermelho</option>
              <option value="Verde">Verde</option>
              <option value="Preto">Preto</option>
              <option value="Branco">Branco</option>
              <option value="Rosa">Rosa</option>
            </select>
            <button onClick={handleSave}>Salvar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
