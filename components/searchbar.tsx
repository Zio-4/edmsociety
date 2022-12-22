import React from 'react'
import { iSearchBar } from '../interfaces/music/interface'

const searchbar = ({value, setSearch, width}: iSearchBar) => {
  return (
    <div className='flex justify-center mt-10'>
        <input type='text' placeholder="Ex. Don't you worry child" className={`rounded-full px-4 py-2 w-${width} outline-none`} ></input>
    </div>
  )
}

export default searchbar