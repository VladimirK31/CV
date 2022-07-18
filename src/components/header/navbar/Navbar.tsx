import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

export function Navbar() {
  return (
    <div className={style.navbar}>
      <NavLink to={'/main'}> Main</NavLink>
      <NavLink to={'/skills'}> Skills</NavLink>
      <NavLink to={'/project'}> Project</NavLink>
      <NavLink to={'/contacts'}> Contacts</NavLink>
    </div>
  )
}
