import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import Header from '../components/Header';
import '../styles/Damas.css';

function Damas() {
  const renderBoard = () => {
    const cells = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isPiece = (row + col) % 2 === 1; // Calcula se a célula deve ter uma peça
        const classNames = isPiece ? 'piece' : '';

        // Adicione o componente Link para cada célula
        cells.push(
          <Link key={`${row}-${col}`} to="/teste" className="cell-link">
            <div className={`cell ${classNames}`}></div>
          </Link>
        );
      }
    }

    return cells;
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Damas</h2>
        <div className="board">
          {renderBoard()}
        </div>
      </div>
    </div>
  );
}

export default Damas;
