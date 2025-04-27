import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <div className="flex flex-row gap-6 text-blue-800 ">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/snippets">
        Snippets
      </NavLink>
    </div>
  )
}

export default Navbar
