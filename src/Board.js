import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import Knight from './Knight';
// import { moveKnight, canMoveKnight } from './Game';

function renderSquare(i, knightPosition) {
  const x = i % 8
  const y = Math.floor(i / 8)
  // const isKnightHere = x === knightX && y === knightY
  // const black = (x + y) % 2 === 1
  // const piece = isKnightHere ? <Knight /> : null

  return (
    <div 
        key={i} 
        style={{ width: '12.5%', height: '12.5%' }}
        // onClick={ () => handleSquareClick(x, y)} --> no longer care about clicks - we're only DnDing!
    >
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  )
}

// function handleSquareClick(toX, toY) {
//     if (canMoveKnight(toX, toY)) {
//         moveKnight(toX, toY);
//     }   
// }

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

export default function Board({ knightPosition }) {
  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition))
  }

  return (
    <DndProvider
      backend={HTML5Backend}
    >
      <div
        style={{
          width: '500px',
          height: '500px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    </DndProvider> 
  )
}