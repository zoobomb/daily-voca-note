import { useRef } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

/* CREATE */
function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    // console.log(engRef.current.value);

    fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: dayRef.current.value,
        eng: engRef.current.value,
        kor: korRef.current.value,
        isDone: false, // default value
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Successfully Added!");
        history.push(`/day/${dayRef.current.value}`);
      }
    });
  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form>
      <div className='input_area'>
        <label>English</label>
        <input type='text' placeholder='New voca here' ref={engRef} />
      </div>
      <div className='input_area'>
        <label>Korean</label>
        <input type='text' placeholder='Meaning here' ref={korRef} />
      </div>
      <div className='input_area'>
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <button onClick={onSubmit}>Save</button>
    </form>
  );
}

export default CreateWord;
