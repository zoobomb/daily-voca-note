import { useState } from "react";

function Word(props) {
  const [word, setWord] = useState(props.word);
  const [isShown, setIsShown] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleShow() {
    setIsShown(!isShown);
  }

  /* UPDATE */
  function toggleDone() {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  /* DELETE */
  function del() {
    if (window.confirm("Are you sure to delete?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }

  if (word.id === 0) {
    return null;
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type='checkbox' checked={isDone} onChange={toggleDone} />
      </td>
      <td>{word.eng}</td>
      <td>{isShown && word.kor}</td>
      <td>
        <button onClick={toggleShow}>
          {isShown ? "Hide " : "Show "}Meaning
        </button>
        <button onClick={del} className='btn_del'>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Word;
