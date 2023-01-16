import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Main() {
  return (
    <>
        <header>
          <div className="nav">
          <ul>
            <li ><NavLink to="/bootstrap">Bootstrap</NavLink></li>
            <li><NavLink to="/mui">Material UI</NavLink></li>
            <li><NavLink to="/router">React Router</NavLink></li>
            <li><NavLink to="/axios">Axios</NavLink></li>
            <li><NavLink to="/fetch">Fetch</NavLink></li>
        </ul>
          </div>
        
        </header>
        <main>
            <Outlet />
        </main>
    </>
  )
}
