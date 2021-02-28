import { useParams } from "react-router-dom";
import Word from "./Word";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

function Day() {
  const day = useParams().day;
  const words = useFetch(`http://localhost:3001/words?day=${day}`); // custom hook

  // // const {day} = useParams(); // bring the string from address
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Day;
