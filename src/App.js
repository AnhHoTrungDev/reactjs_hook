import React, { useReducer, useState } from "react";

function reducerTodo(state, action) {
  switch (action.type) {
    case "add-todo":
      console.log("state :", state);
      console.log("action :", action);
      console.log("=>");
      return {
        todos: [...state.todos, { text: action.text, isCompleted: false }],
      };
    case "toggle-todo":
      return {
        todos: state.todos.map((todo, index) =>
          index === action.idx
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        ),
      };
    default:
      return state;
  }
}

const App = () => {
  //`      #state    #dispatch               #function   #gía trị ban đầu (initialState)`;
  const [{ todos }, handleTodo] = useReducer(reducerTodo, { todos: [] });
  const [text, setText] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleTodo({ type: "add-todo", text });
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>

      {todos.map((todo, index) => (
        <div
          key={index}
          onClick={() => handleTodo({ type: "toggle-todo", idx: index })}
          style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
        >
          {todo.text}
        </div>
      ))}

      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};
export default App;
