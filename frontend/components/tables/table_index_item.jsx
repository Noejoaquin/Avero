import React from 'react';
import { Link } from 'react-router-dom';


export const TableIndexItem = ({id, number}) => {
  return (
    <div className='index-item-container'>

        <Link to={`tables/${id}/checks`}><li className='index-item'>
          {number}
        </li></Link>

    </div>
  )
}
