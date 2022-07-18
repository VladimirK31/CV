import Button from '@mui/material/Button'
import style from './Contacts.module.css'

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.container}>
        <div className={style.form_block}>
          <h2 className={style.title}>Contacts</h2>
          <div>
            <form className={style.form}>
              <input className={style.input}></input>
              <input className={style.input}></input>
              <textarea className={style.textArea}></textarea>
            </form>
          </div>
          <button>SEND</button>
        </div>
      </div>
    </div>
  )
}
