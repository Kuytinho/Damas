import React from 'react';
import Header from '../components/Header';
import '../styles/Damas.css';

function Damas() {
  const renderBoard = () => {
    const cells = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isPiece = (row + col) % 2 === 1; // Calcula se a célula deve ter uma peça
        const classNames = isPiece ? 'piece' : '';

        cells.push(<div key={`${row}-${col}`} className={`cell ${classNames}`}></div>);
      }
    }

    return cells;
  };

  return (
    <div>
      <Header />
      <div className="container"> {/* Adicione a classe container */}
        <h2>Damas</h2>
            <div className="board">
                {renderBoard()}
            </div>
      </div>
    </div>
  );
}

export default Damas;
