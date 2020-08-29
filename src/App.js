import React, { useEffect } from 'react';
import TodoList from "./ToDo/TodoList";
import Context from "./Context";
import AddTodo from "./ToDo/AddTodo";
import Loader from './Loader';

function App() {

    const [todos, setTodos] = React.useState([])

    const [loading, setLoading] = React.useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then(response => response.json())
            .then(responseJson => {
                setTimeout(() => {
                    setTodos(responseJson);
                    setLoading(false);
                }, 2000)

            })
    }, [])


    function toggleTodoItem(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    function addTodo(value) {
        setTodos(todos.concat([{
            id: todos.length + 1,
            completed: false,
            title: value,
        }]))
    }


    return (
        <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>First time React</h1>
                <AddTodo onCreate={addTodo} />

                {loading && <Loader />}

                {todos.length
                    ? <TodoList todo={todos} onToggle={toggleTodoItem} />
                    : loading
                        ? null : <h3>No tasks for now</h3>}
            </div>
        </Context.Provider>
    );
}

export default App;
