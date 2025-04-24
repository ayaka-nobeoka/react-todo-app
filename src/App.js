import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [input, setInput] = useState("");
  const [state, setState] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  const handleDelete = (id) => {
  const newState = state.filter((task) => task.id !== id)
  setState(newState);
  }


  const handleSubmit = () => {
    if (input.trim() === "") return;

    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false,
    };

    setState([...state, newTask]);
    setInput("");
  };


  return (
    <>
      <input value={input} onChange={handleChange}></input>
      <button onClick={handleSubmit}>追加</button>
      <ul>
        {state.map((task) => (
          <li key={task.id}>
            {task.text} <button onClick={ () => handleDelete(task.id) }>削除</button>
            <button>完了</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
