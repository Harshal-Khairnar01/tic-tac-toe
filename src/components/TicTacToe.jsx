import React from 'react'

import "../App.css";
import useTicTacToe from '../hooks/use-tic-tac-toe';



export default function TicTacToe() {
  const{board, handleClick, getStatusMessage, resetGame}=useTicTacToe();
   
  return (
   <div className="game">
      <div className="status">
      {getStatusMessage()}
        <button className="reset-btn" onClick={resetGame}>Reset Game</button>
      </div>
      <div className="board">
        {/* render board  */}
        {board.map((b, i) => {
          return (
            <button key={i} className="cell" onClick={()=>handleClick(i)} disabled={b!==null}>
              {b}
            </button>
          );
        })}
      </div>
    </div>
  )
}
