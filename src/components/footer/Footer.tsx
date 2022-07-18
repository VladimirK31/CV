import style from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <h2 className={style.title}>NAME NAME</h2>
        <div className={style.blockItems}>
          <div className={style.item}> +</div>
          <div className={style.item}>+</div>
          <div className={style.item}>+</div>
          <div className={style.item}>+</div>
        </div>
        <h3 className={style.title}> 2022 Все права защищены</h3>
      </div>
    </div>
  )
}
