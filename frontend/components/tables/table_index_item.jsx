import React from 'react';
import { Link } from 'react-router-dom';


export const TableIndexItem = ({number}) => {
  return (
    <div className='index-item-container'>
      <li className='index-item'>
        {number}
      </li>
    </div>
  )
}
