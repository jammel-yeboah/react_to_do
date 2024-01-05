import React from 'react';
import TodoListItem from '../components/TodoListItem.js';
import styles from '../TodoList.module.css';

function TodoList ({items, setItems}) {

    const handleDelete = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }

    return (
        items.length !== 0 ? (
            <div className={styles['to-do-list']}>
                {items.map((item, index) => (
                    <TodoListItem key={index} item={item} handleDelete={handleDelete}/>
                ))}
            </div>
        ) : (
            <div className={styles.prompt}><p>Add an item by clicking "Add Item" to the right..</p></div>
        )
    )
}

export default TodoList;