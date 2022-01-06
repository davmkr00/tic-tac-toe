import { useState, useEffect } from 'react'
import { Node } from './node';
import lines from '../constants/winerLines';
import nodes from '../constants/nodesSeq';

export function Board() {
    const emptyBoard = Array(9).fill(null)
    const [boardState, setBoardState] = useState(emptyBoard);
    const [number, setNumber] = useState(0);
  
    useEffect(() => {
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]){
            alert(`Winner is ${boardState[a]}`)
            setBoardState(emptyBoard)
            setNumber(0)
            return          
          }
        }
        if (number === 9){
          alert('Draw')
          setBoardState(emptyBoard)
          setNumber(0)
        }
      }, [number])

    const updateBoard = (idx) => {
      let symbol = number % 2 ? 'O' : 'X'
      if (!boardState[idx]){
        boardState[idx] = symbol
        setBoardState([...boardState])
        setNumber(number + 1)
      }
    }
    return (
      <div>
        { nodes.map((arr) => (<div className='board-row' key={Math.random()}>
          { arr.map((i) => (<Node key={Math.random()} value={boardState[i]} handleClick={updateBoard.bind(null, i)} />)) }
        </div>)) }
      </div>
    )
  }