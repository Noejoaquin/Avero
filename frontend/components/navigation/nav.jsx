import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = ({ path }) => {
  let linkToTables = path === '/' ? <li></li> : <Link to='/'><button>Back To Tables</button></Link>
  return (
        <div>
          <h1>LARAVAL</h1>
          {linkToTables}
        </div>
  )
}
