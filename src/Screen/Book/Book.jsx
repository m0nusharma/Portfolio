import React from 'react'
import OpenBookName from '../OpenBookName/OpenBookName'


const Book = ({book}) => {
  return (
    <div className=''>
    <img
    src={book}
    className="absolute top-[57px] left-[-180px] h-[240px] "
  />
  
  </div>
  )
}

export default Book
