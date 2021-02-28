import { useState } from "react";

function Word({ word }) {
  const [isShown, setIsShown] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShown(!isShown);
  }

  function toggleDone() {
    setIsDone(!isDone);
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShown && word.kor}</td>
      <td>
        <button onClick={toggleShow}>Meaning</button>
        <button className='btn_del'>Delete</button>
      </td>
    </tr>
  );
}

export default Word;
