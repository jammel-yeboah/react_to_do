import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../AddItem.module.css';

/*
add item button
handleclick function to handle add item button click
form with text box and submit button
    pass text box value to tolist item as a prop
        which will be item state on submit
*/

function AddItem ({item, setItem, handleAddItem}) {
    const [addingItem, setAddingItem] = useState(false);

    const handleClick = () => {
        setAddingItem(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (item.text !== undefined && item.text !== ''){
            item.id = uuidv4();
            handleAddItem(item); //add item to list
            setItem({}); //reset item state
            setAddingItem(false); //item is now added, we aren't currently adding an item
        }
    }

    const handleChange = (event) => {
        setItem(prevItem => ({ ...prevItem, text: event.target.value }));
    }

    return (
        <div className={styles['add-item-container']}>
            <button className={styles['add-button']} onClick={handleClick}>Add an Item</button>
            {addingItem && (
                <form className={styles['form']} onSubmit={handleSubmit}>
                    <input className={styles['input']} type="text" onChange={handleChange} placeholder="Add item..." />
                    <button className={styles['submit-button']} type="submit">Done</button>
                </form>
            )}
        </div>
    )
}

export default AddItem;