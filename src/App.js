import React from 'react';
import TodoList from "./ToDo/TodoList";
import Context from "./Context";
import AddTodo from "./ToDo/AddTodo";

function App() {
    const [todos, setTodos] = React.useState([
            {id: 1, completed: false, title: 'buy bread'},
            {id: 2, completed: false, title: 'finish home tasks'},
            {id: 3, completed: false, title: 'go to the gym'},
        ])

    function toggleTodoItem (id){
        setTodos(
            todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
            })
        )
    }
    function removeTodo(id){
        setTodos(todos.filter((todo)=> todo.id !== id))
    }
    function addTodo(value) {
        setTodos(todos.concat([{
            id: todos.length + 1,
            completed: false,
            title: value,
        }]))
    }
  return (
      <Context.Provider value = {{removeTodo}}>
        <div className="wrapper">
          <h1>First time React</h1>
            <AddTodo onCreate={addTodo}/>
            {todos.length
                ? <TodoList todo = {todos} onToggle={toggleTodoItem} />
                : <h3>No tasks for now</h3>}
        </div>
      </Context.Provider>
  );
}

export default App;
