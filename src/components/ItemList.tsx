import React from 'react';

import './ItemList.css';

interface ItemListProps {
    items: {id: string, text: string}[];
    onDeleteItem: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = (props) => {
    return (
    <div>
        <ul>
        {props.items.map(item => (
        <li key={item.id}>
            <span>{item.text}</span>
            <button onClick={props.onDeleteItem.bind(null, item.id)}>DELETE</button>
        </li>
        ))}
        </ul>
    </div>
    );
};

export default ItemList;