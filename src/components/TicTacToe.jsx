import React from "react";

import "../App.css";
import useTicTacToe from "../hooks/use-tic-tac-toe";

export default function TicTacToe() {
  const { board, handleClick, getStatusMessage, resetGame } = useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        <h1 className="status-msg">
           {getStatusMessage()}
        </h1>
       
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="board">
        {/* render board  */}
        {board.map((b, i) => {
          return (
            <button
              key={i}
              className="cell"
              onClick={() => handleClick(i)}
              disabled={b !== null}
              style={{
                color: b === "X" ? "#222831" : "#393E46",
                backgroundColor:
                  b === "X" ? "#33ff74" : b === "0" ? "#FFB22C" : "#522546",
              }}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
}
