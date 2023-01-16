import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function Main() {
  return (
    <>
        <header>
        <ol>
            <li><NavLink to="/bootstrap">Bootstrap</NavLink></li>
            <li><NavLink to="/mui">Material UI</NavLink></li>
            <li><NavLink to="/router">React Router</NavLink></li>
            <li><NavLink to="/axios">Axios</NavLink></li>
            <li><NavLink to="/fetch">Fetch</NavLink></li>
        </ol>
        </header>
        <main>
            <Outlet />
        </main>
    </>
  )
}
