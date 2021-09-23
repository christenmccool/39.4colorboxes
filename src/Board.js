import React, {useState} from 'react';
import './Board.css';
import colorChoices from './colorChoices.js';
import Box from './Box.js';

function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const Board = ({size=16}) => {
  const arr = Array.from({ length: size });
  const colorArr = arr.map(ele => choose(colorChoices));

  const [colors, setColors] = useState(colorArr);

  function handleClick() {
    const ind = Math.floor(Math.random() * colors.length);
    const newColors = [...colors];
    newColors[ind] = choose(colorChoices);
    setColors(newColors);
  }
  
  return (
    <div className="Board">
      <div className="Board-div">
        {colors.map(ele => (
          <Box color={ele} />
        ))}
      </div>
      <button className="Board-btn" onClick={handleClick}>Change</button>
    </div>
  )
}

export default Board;