import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import { observe } from './Game';

const root = document.getElementById('root');

observe( (knightPosition) => 
  ReactDOM.render(
    <Board 
      knightPosition={knightPosition}
    />,
    root
  )
)

// ReactDOM.render(
//   <Board knightPosition={[0, 0]} />,
//   document.getElementById('root')
// )