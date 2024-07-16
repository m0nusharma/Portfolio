import React from 'react'

const MiniFlexCard = ({text,icon, menuItem, setMenuitem}) => {
  return (
    <div className='flex items-center mb-4 cursor-pointer' onClick={()=>setMenuitem(text)}>
      <img  className={`h-[15px] mr-3 'opacity-100': 'opacity-40'}`} src={icon} alt={text} /> 
      <p className={` mb-0 ${menuItem===text? 'opacity-100': 'opacity-40'}`}>{text}</p>
    </div>
  )
}

export default MiniFlexCard
