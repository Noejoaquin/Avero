import React from 'react';
import { Link } from 'react-router-dom';


export const ErrorModal = ({description}) => {
  return (
      <div className='error-modal'>
        <ul className='error-list'>
          <li>{description}</li>
        </ul>
      </div>
  )
}
