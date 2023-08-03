import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
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
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowDamas(true);
    }, 1000);

    setTimeout(() => {
      setShowGame(true);
    }, 2000);

    setTimeout(() => {
      setShowInputs(true);
    }, 3000);
  }, []);

  useEffect(() => {
    // Verifica se todos os campos estão preenchidos
    setIsButtonDisabled(!(name && nickname && color));
  }, [name, nickname, color]);

  const handleSave = () => {
    const updatedUser = {
      name: name,
      nickname: nickname,
      color: color,
    };

    setUser(updatedUser);
    setIsSaved(true)
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
                <button onClick={handleSave} disabled={isButtonDisabled}>
                Salvar
                </button>
            <Link to="/damas">
                <button disabled={!isSaved}>
                Jogar
                </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
