import React from 'react'
import Items from '../Items/MiniFlexCard'
import home from "../../assets/home (2).png"
import expri from '../../assets/experience.png'
import project from '../../assets/idea.png'
import skill from '../../assets/creative-thinking.png'
import Educations from '../../assets/mortarboard (1).png'
import contact from '../../assets/telephone (1).png'

const Bars = ({menuItem, setMenuitem}) => {
  return (
    <div>
      <p className=' mt-3 font-extrabold text-gray-500'>MAIN MENU</p>
      <Items icon={home} text= "Home" menuItem={menuItem} setMenuitem={setMenuitem}/>
      <Items icon={expri} text= "Experience" menuItem={menuItem} setMenuitem={setMenuitem}/>
      <Items icon={project} text= "Project" menuItem={menuItem} setMenuitem={setMenuitem}/>
      <Items icon={skill} text= "Skills" menuItem={menuItem} setMenuitem={setMenuitem}/>
      <Items icon={Educations} text= "Educations" menuItem={menuItem} setMenuitem={setMenuitem}/>
      <Items icon={contact} text= "Contact" menuItem={menuItem} setMenuitem={setMenuitem}/>
    </div>
  )
}

export default Bars
