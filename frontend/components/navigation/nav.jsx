import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = ({ path }) => {
  let linkToTables = path === '/' ? <li></li> : <Link className='nav-link' to='/'><button className='nav-button'>Back To Tables</button></Link>
  return (
        <div className='nav-container'>
          <h1 className='nav-header'>LARAVAL</h1>
          {linkToTables}
        </div>
  )
}
