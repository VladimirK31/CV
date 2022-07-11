import style from './ProjectItem.module.css'
export type myProjects = {
  title: string
  description: string
  img: any
}

export function ProjectItem() {
  const myProjects: myProjects[] = [
    { title: 'Todolist', description: 'Todolist client', img: 'todo' },
    {
      title: 'Social network',
      description:
        'Social network client.Used class components, redux, ant design',
      img: 'socNet',
    },
    { title: 'Cards', description: 'something', img: 'cards' },
  ]
  const myProjectJSX = myProjects.map((p, i) => {
    return (
      <div key={i} className={style.project_item}>
        <div className={style.img}>{p.img}</div>
        <div className={style.title}>{p.title}</div>
        <div className={style.description}>
          <p>{p.description}</p>
        </div>

        <div className={style.blockButton}>
          <button className={style.button}>+</button>
          <button className={style.button}>+</button>
        </div>
      </div>
    )
  })

  return <>{myProjectJSX}</>
}
