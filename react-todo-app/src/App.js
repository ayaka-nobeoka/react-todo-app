import TodoList from "./TodoList";
import "./App.css";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  //要素を取得できる
  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameRef.current.value;
    if (name === "") return;
    console.log(todoNameRef.current.value);
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
      //新しい配列を作って、それを state にセットしている
    });
    todoNameRef.current.value = null;
    //新しいタスクを追加したあと、入力欄の中身を消すため
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>タスクの追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;

//[...prevTodos, 新しいTodoオブジェクト]
//prevTodos：今までのタスクリスト（配列）
//...prevTodos：その中身を展開（スプレッド）
//{ id: uuidv4(), name: name, completed: false }：新しく追加したいタスク
