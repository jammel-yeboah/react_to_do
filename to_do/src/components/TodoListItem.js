import React, { useState } from 'react';
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
        <div>
            <button onClick={onClickCheck}>Check</button>
            <p style={checked ? {textDecoration: 'line-through'}: {}}>{item}</p>
            <button onClick={() => handleDelete(item)}>Delete</button>
        </div>
    )
    }

export default TodoListItem;