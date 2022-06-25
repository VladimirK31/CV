import style from './Main.module.css'

export function Main() {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.text}>
          <span>Hi</span>
          <h1>My name</h1>
          <p>frontend developer </p>
        </div>
        <div className={style.photo}></div>
      </div>
    </div>
  )
}
