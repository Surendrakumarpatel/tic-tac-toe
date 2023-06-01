import TicTacToe from "./TicTacToe";
import React, { useState } from "react";
import { createBoard } from "./utils/boardUtils";

let BoardContext = React.createContext();

function App() {
  let blank = createBoard();
   let [board , setBoard]= useState(blank);
  return (
    <BoardContext.Provider value = {{board,setBoard}}>
      <TicTacToe/>

    </BoardContext.Provider>
  )
}

export {App,BoardContext};
