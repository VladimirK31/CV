import style from './ProjectItem.module.css'
export type myProjects = {
  title: string
  description: string
}

export function ProjectItem() {
  const myProjects: myProjects[] = [
    { title: 'Todolist', description: 'Todolist client' },
    {
      title: 'Social network',
      description:
        'Social network client.Used class components, redux, ant design',
    },
    { title: 'Cards', description: 'something' },
  ]
  const myProjectJSX = myProjects.map((p, i) => {
    return (
      <div key={i} className={style.project_item}>
        <div>
          <div className={style.title}>{p.title}</div>
          <div className={style.blockButton}>
            <a style={{ textDecoration: 'none' }} href={''}>
              <button>VIEW</button>
            </a>
            <a style={{ textDecoration: 'none' }} href={''}>
              <button>GIT HUB</button>
            </a>
          </div>

          <div className={style.description}>
            <p>{p.description}</p>
          </div>
        </div>
      </div>
    )
  })

  return <>{myProjectJSX}</>
}
