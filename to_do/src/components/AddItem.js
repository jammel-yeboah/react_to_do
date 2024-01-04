import React, { useState } from 'react';

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
        if (item !== ''){
            setAddingItem(false); //item is now added, we aren't currently adding an item
            handleAddItem(item); //add item to list
            setItem(''); //reset item state
        }
    }

    const handleChange = (event) => {
        setItem(event.target.value);
    }

    return (
        <div>
            <button onClick={handleClick}>Add an Item</button>
            {addingItem && (
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} placeholder="Add item..." />
                    <button type="submit">Done</button>
                </form>
            )}
        </div>
    )
}

export default AddItem;