import React from 'react';
import TodoListItem from '../components/TodoListItem.js';

function TodoList ({items, setItems}) {

    const handleDelete = (itemToDelete) => {
        setItems(items.filter((i) => i !== itemToDelete));
    }

    return (
        <div>
            {items.map((item, index) => (
                <TodoListItem key={index} item={item} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}

export default TodoList;