import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../Context";

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid grey',
        borderRadius: '1rem',
        marginBottom: '1rem',

    },
    input:{
        marginRight: '1rem'
    }
}

function TodoItem ({todo, index, onChangeCheckbox}) {
    const {removeTodo} = useContext(Context);
    const classes = [];
    if(todo.completed === true){
        classes.push('done');
    }
    console.log('todo: ', todo);
    return (
        <li style = {styles.li}>
            <span className={classes.join(' ')}>
                <input
                    style = { styles.input }
                    type="checkbox"
                    onChange = {() => onChangeCheckbox(todo.id) }
                />
                <strong>
                    {index+1}.
                    &nbsp;
                </strong>
                {todo.title}
            </span>
            <button className="removeBtn" onClick={removeTodo.bind(null, todo.id)}>&times;</button>

        </li>
    )
}

 TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
     onChangeCheckbox: PropTypes.func.isRequired,
}

export default TodoItem;
