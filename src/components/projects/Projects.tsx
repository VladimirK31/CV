import style from './Projects.module.css'
import { ProjectItem } from './project_item/ProjectItem'

export const Projects = () => {
  return (
    <div className={style.project}>
      <div className={style.container}>
        <h2 className={style.title}> My Projects</h2>
        <div className={style.block_skills}>
          <ProjectItem />
        </div>
      </div>
    </div>
  )
}
