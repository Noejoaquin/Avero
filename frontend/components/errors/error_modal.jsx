import React from 'react';
import { Link } from 'react-router-dom';


export const ErrorModal = ({description}) => {
  return (
      <div className='error-modal modal'>
        <ul className='error-list modal-list'>
          <li>{description}</li>
        </ul>
      </div>
  )
}
