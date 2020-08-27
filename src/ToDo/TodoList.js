import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types"
const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
    }
}

function TodoList(prop) {
    return (
        <ul style = {styles.ul}>
            { prop.todo.map((todo, index) =>{
                return <TodoItem
                    todo = {todo}
                    index = {index}
                    onChangeCheckbox={prop.onToggle}
                    key = {todo.id}
                />
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todo: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,

}

export default TodoList;
