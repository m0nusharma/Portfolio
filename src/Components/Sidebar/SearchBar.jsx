import React from 'react'

const SearchBar = () => {
  return (
    <div className='border-2 p-2 rounded-sm flex items-center gap-2'>
    <i className="fa-solid fa-magnifying-glass text-gray-400"/>
    <input  type='search' placeholder='Search ' className='border-none'/>
    </div>
  )
}

export default SearchBar
