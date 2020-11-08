import React from 'react';
import PropTypes from 'prop-types';
//import checkbox from 'react-bootstrap/checkbox';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import {actions, initialState, todoSlice} from "../../Containers/TodoList/todoSlice";
import {useState} from 'react';
import { connect } from 'react-redux'
import './TodoItem.scss';
import TodoList from "../../Containers/TodoList/TodoList";
import removeTodo from "../../Containers/TodoList/TodoList"

/**
 * todo implement here component which will show todo item
 * Component should contain checkbox text and trash icon for remove item
 *
 * This component should receive the following params
 * text -  name of task
 * id - id of task
 * checked - checked state of the task
 * onCheck - callback which should be called if the checkbox state was changed
 * onRemove - callback which should be called if the trash icon was called
 *
 * NOTE: need to pass task id into callbacks as param
 */

const TodoItem = ({todo, text, id, completed, markAsChecked, onRemove}) => {
    return (
        <React.Fragment>
            <li className="todo"
                key={id}
                // style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
                
            >   
            <input type="checkbox" onClick={markAsChecked} checked={todo.completed}/>

                <label className = "checkbox" onClick={markAsChecked} checked={todo.completed}></label>
                <div className="taskText" style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                    <div className="deleteTask" onClick={onRemove}>                        
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
                    </div>
                </div>
            </li>
            <hr/>
        </React.Fragment>
    )
};

TodoItem.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    markAsChecked: PropTypes.bool.isRequired,
    onRemove: PropTypes.func.isRequired,
}

export default TodoItem
