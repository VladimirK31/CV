import style from './Contacts.module.css'

export const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Contacts</h2>
        </div>

        <form>
          <input></input>
          <input></input>
          <textarea></textarea>
        </form>
        <button>Send</button>
      </div>
    </div>
  )
}
