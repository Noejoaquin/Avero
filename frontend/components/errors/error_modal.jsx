import React from 'react';
import { Link } from 'react-router-dom';


export const ErrorModal = ({description}) => {
  return (
      <div className='error-modal modal'>
        <h1 className='modal-list modal-header error-modal-header'>Error!</h1>
        <ul className='error-list modal-list'>
          <li className='error-list-item'>{description}</li>
          <li className='error-list-item'>Please Close the Currently Open Check If You Wish To Open A New One</li>
        </ul>
      </div>
  )
}
