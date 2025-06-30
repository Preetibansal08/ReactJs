import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() , isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() , isDone : false }];
    });
    setNewTodo("");
  };
  

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  // let upperCaseAll = () => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       // console.log(todo);
  //       return {
  //         ...todo,
  //         task: todo.task.toUpperCase(),
  //       };
  //     })
  //   );
  // };
  let markAsDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // console.log(todo);
        return {
          ...todo,
          isDone: true
        };
      })
    );
  };
  

  // let updateOne = (id) => {
  //   setTodos((prevTodos) =>
  //     prevTodos.map((todo) => {
  //       // console.log(todo);
  //       if (todo.id == id) {
  //         return {
  //           ...todo,
  //           task: todo.task.toUpperCase(),
  //         };
  //       } else {
  //         return todo;
  //       }
  //     })
  //   );
  // };
  
  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        // console.log(todo);
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div style={{ border: "solid black 2px", padding: "10px" }}>
      <h1>Make List</h1>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        style={{ margin: 6, padding: 12, border: "solid black 2px" }}
        onChange={updateTodoValue}
      ></input>
      <button
        style={{ backgroundColor: "pink", border: "solid red 2px" }}
        onClick={addNewTask}
      >
        {" "}
        Add task
      </button>
      <br />
      <hr></hr>
      <h2>Task Todo</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
            <button
              style={{
                border: "solid black 2px",
                padding: "10px",
                margin: "10px",
              }}
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            {/* <button
              style={{
                border: "solid black 2px",
                padding: "10px",
                margin: "10px",
              }}
              onClick={() => updateOne(todo.id)}
            >
              Update
            </button> */}
            <button
              style={{
                border: "solid black 2px",
                padding: "10px",
                margin: "10px",
              }}
              onClick={() => markAsDone(todo.id)}
            >
              Done
            </button>
          </li>
        ))}
      </ul>
      <br />
      {/* <button
        style={{
          border: "solid red 2px",
          backgroundColor: "Pink",
          padding: "10px",
          margin: "10px",
        }}
        onClick={upperCaseAll}
      >
        UpperCase All
      </button> */}
        <button
        style={{
          border: "solid red 2px",
          backgroundColor: "Pink",
          padding: "10px",
          margin: "10px",
        }}
        onClick={markAsDoneAll}
      >
       Done All
      </button>
    </div>
  );
}

export default App;
