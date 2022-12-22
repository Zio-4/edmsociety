import React, { useState } from 'react'
import Searchbar from '../components/searchbar'


const events = () => {
    const [search, setSearch] = useState('')

  return (
    <div>
        <div className='w-2/12 m-auto'>
            <Searchbar value={search} setSearch={setSearch}/>
        </div>
    </div>
  )
}

export default events