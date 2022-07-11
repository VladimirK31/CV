import Button from '@mui/material/Button'
import style from './Contacts.module.css'

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Contacts</h2>
        </div>
        <div>
          <form className={style.textBlock}>
            <input></input>
            <input></input>
            <textarea></textarea>
          </form>
          <Button variant="outlined">Send</Button>
        </div>
      </div>
    </div>
  )
}
