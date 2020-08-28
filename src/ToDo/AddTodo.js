import React, {useState} from "react";
import PropTypes from "prop-types"

function useInputValue(defaulteValue = '') {
    const [value, setValue]=useState(defaulteValue);
    return {
        value,
        onChange: event => setValue(event.target.value),
    }
}

function AddTodo({onCreate}){
    const input = defaulteValue('');
    function submitHandler(event){
        event.preventDefault();
        if(value.trim()){
            onCreate(value);
            setValue('');
        }
            }
    return (
        <form style = {{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input
                type="text"
                value={value}
                onChange={event =>setValue(event.target.value)}
            />
            <button type="submit">Add task</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddTodo;
