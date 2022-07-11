import style from './Skills.module.css'
import react from '.././common/icon/react.png'
import redux from '.././common/icon/redux.png'
import css from '.././common/icon/css.png'
import js from '.././common/icon/js.png'
import typeScript from '.././common/icon/typeScript.png'
import html from '.././common/icon/html.png'
export type MySkillType = {
  title: string
  icon?: any
}
export function Skills() {
  const mySkill: MySkillType[] = [
    {
      title: 'React',
      icon: <img src={react} style={{ width: '50px', height: '50px' }} />,
    },
    {
      title: 'Redux',
      icon: <img src={redux} style={{ width: '50px', height: '50px' }} />,
    },
    {
      title: 'Css3',
      icon: <img src={css} style={{ width: '50px', height: '50px' }} />,
    },
    {
      title: 'JavaScript',
      icon: <img src={js} style={{ width: '50px', height: '50px' }} />,
    },
    {
      title: 'TypeScript',
      icon: <img src={typeScript} style={{ width: '50px', height: '50px' }} />,
    },
    {
      title: 'Html5',
      icon: <img src={html} style={{ width: '50px', height: '50px' }} />,
    },
  ]

  return (
    <div className={style.skills}>
      <div className={style.container}>
        <h1 className={style.title}>My Skills</h1>
        <div className={style.items}>
          {mySkill.map((s, i) => {
            return (
              <span key={i} className={style.skill_item}>
                <span>{s.icon}</span>
                <h4>{s.title}</h4>
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
