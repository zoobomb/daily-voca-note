import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

/* CREATE */
function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const history = useHistory();

  function addDay(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/days/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert(`Day ${days.length + 1} is Added!`);
        history.push("/");
      }
    });
  }

  return (
    <div>
      <h3>Current days : {days.length} days</h3>
      <button onClick={addDay}>Add Day</button>
    </div>
  );
}

export default CreateDay;
