import React from 'react';
import { Link } from 'react-router-dom';


export const TableIndexItem = ({id, number}) => {
  return (
    <div className='index-item-container'>

        <li className='index-item'><Link to={`/tables/${id}/checks`}>
          {number}
        </Link></li>

    </div>
  )
}
