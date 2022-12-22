import React, { useState } from 'react'
import Searchbar from './searchbar'

const filterCategories = ['New Releases', 'Top Albums', 'Top Artists', 'Top Songs']

const filters = () => {
    const [search, setSearch] = useState('')

  return (
    <div className='flex justify-center mt-20'>
        <div>
            <div className='text-slate-100 flex space-x-10'>
                {filterCategories.map(cat => <ul key={cat} className='bg-fuchsia-500 py-1 px-4 rounded-full transition duration-500 hover:scale-125 cursor-pointer'>{cat}</ul>)}
            </div>

            <Searchbar value={search} setSearch={setSearch} width={'1/2'}/>
        </div>
    </div>
  )
}

export default filters