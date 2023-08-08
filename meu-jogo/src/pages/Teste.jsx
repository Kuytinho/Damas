import React, { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
// import { Link } from 'react-router-dom';
import '../styles/Teste.css'; // Importe o arquivo de estilos para a página Teste
import Context from '../Provider/Context';

function Teste() {
    const [showDamas, setShowDamas] = useState(false);
    const [showGame, setShowGame] = useState(false);
    const [showInputs, setShowInputs] = useState(false);
    const { user, setUserTestLike } = useContext(Context);
  
    const [like, setLike] = useState('');
    const [inventor, setInventor] = useState('');
    // const [nickname, setNickname] = useState('');
    // const [color, setColor] = useState('');
    // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    // const [isSaved, setIsSaved] = useState(false);
  
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
  
    // useEffect(() => {
    //   // Verifica se todos os campos estão preenchidos
    //   setIsButtonDisabled(!(like && nickname && color));
    // }, [like, nickname, color]);
  
    // const handleSave = () => {
    //   const updatedLike = {
    //     like: like,
    //   };
  
    //   setIsSaved(true)
    //   setUserTestLike(updatedLike)
    // };
    const handleLike = (e) => {
        setLike(e.target.value)
    }
  
    return (
      <div>
        <Header />
        <div className='container'>
        <h1 className={showDamas ? 'show' : ''}>Antes de jogar</h1>
        <h1 className={showGame ? 'show' : ''}>Me responde uma coisinha...</h1>
        {showInputs && (
          <div>
            <h1 className="show">{user ? `Senhor ${user.nickname}` : ""}</h1>
            <div className="input-container">
              <h5>Voce gosta mesmo de damas?</h5>  
              <select value={like} onChange={(e) => handleLike(e)}>
                <option value=""></option>
                <option value="Sim">Sim, amo</option>
                <option value="Não">Não, era brinks</option>
              </select>
              {like === "Sim" && (
                <div className='input-container'> 
                    <h5>Então qual o nome do rapaz que inventou o jogo?</h5> 
                    <select value={inventor} onChange={(e) => setInventor(e.target.value)}>
                    <option value=""></option>
                    <option value="Sim">Geraldino Izidoro</option>
                    <option value="Não">Francesco Totti</option>
                    <option value="Não">Gianluigi Buffon</option>
                    <option value="Não">James Lefleur</option>
                    <option value="Não">Jack Shepard</option>
                    <option value="Não">Ok, eu sou uma fraude e não sei nada sobre damas</option>
                    </select>
                </div>
                )}
            </div>
          </div>
        )}
        </div>
      </div>
    );
}

export default Teste;
