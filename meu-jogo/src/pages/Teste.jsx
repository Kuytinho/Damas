import React from 'react';
import Header from '../components/Header';
import '../styles/Teste.css'; // Importe o arquivo de estilos para a página Teste

function Teste() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2>Espera um pouco...</h2>
        <h3>Antes de começar a jogar, me responde mais umas coisinhas...</h3>
        <div className="inputs-container">
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
          <button>Salvar</button>
        </div>
      </div>
    </div>
  );
}

export default Teste;
