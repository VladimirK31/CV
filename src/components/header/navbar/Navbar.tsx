import style from './Navbar.module.css'

export function Navbar() {
  return (
    <div className={style.navbar}>
      <a href="">Main</a>
      <a href="">Skills</a>
      <a href="">Project</a>
      <a href="">Contacts</a>
    </div>
  )
}
