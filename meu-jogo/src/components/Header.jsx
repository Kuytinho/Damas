import React, { useContext } from 'react';
import Context from '../Provider/Context';
import '../styles/Header.css';

function Header() {
  const { user } = useContext(Context);

  if (!user) {
    return null; // Não renderiza o cabeçalho se não houver usuário definido
  }

  const { name, nickname, color } = user;



  return (
    <div className={`header ${color}`}>
      <p>Olá {name}!</p>
      <p>Ou devo chama-lo de {nickname}?</p>
    </div>
  );
}

export default Header;
