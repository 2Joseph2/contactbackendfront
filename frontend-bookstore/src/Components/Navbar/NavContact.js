import React from 'react'
import './NavContact.css'
import {Link} from 'react-router-dom'

const NavContact = () => {
  return (
    <div><ul>
    <li><a  ><Link to={'/'}  >Home</Link></a></li>
    <li><a><Link to={'/list'}>ListContact</Link></a></li>
    <li><a><Link to={'/add'}>Add Contact</Link></a></li>
    <li style={{float:"right"}}><a class="active" >About</a></li>
  </ul></div>
  )
}

export default NavContact