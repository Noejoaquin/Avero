import React from 'react';
import { Link } from 'react-router-dom';


export const ItemIndexItem = ({itemId, name, price}) => {
  return (
    <div className='item-index-item-container'>

        <li className='item-index-item'>
          {name}
          {price}
        </li>

    </div>
  )
}
