import React, { useRef } from 'react';

import './NewItem.css';

interface NewItemProps {
    onAddItem: (itemText: string) => void;
};

const NewItem: React.FC<NewItemProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const itemSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddItem(enteredText);
    };

    return (
        <form onSubmit={itemSubmitHandler}>
            <div className="form-control">
                <label htmlFor="item-text">Item Text</label>
                <input type="text" id="item-text" ref={textInputRef} />
            </div>
            <button type="submit">Add Item!</button>
        </form>
    );
};

export default NewItem;