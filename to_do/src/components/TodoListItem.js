import React, { useState } from 'react';
import styles from '../TodoListItem.module.css';
/*
take in text item prop
display text item in a box
display check mark button on the left of box
on click of check mark button, item is crossed out
display delete button on the right of box
on click of delete button, item is deleted

only display todo list item if adding item is false
*/

function TodoListItem ({item, handleDelete}) {

    const [checked, setCheck] = useState(false);

    const onClickCheck = () => {
        setCheck(!checked);
    }

    return (
        <div className={styles['todo-list-item-container']}>
            <button className={styles['check-button']} onClick={onClickCheck}>Check</button>
            <p className={styles['todo-list-item']} style={checked ? {textDecoration: 'line-through'}: {}}>{item.text}</p>
            <button className={styles['delete-button']} onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
    )
    }

export default TodoListItem;