import style from './Header.module.css'
import { Logo } from './logo/Logo'
import { Navbar } from './navbar/Navbar'

export function Header() {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <Logo />
        <Navbar />
      </div>
    </div>
  )
}
