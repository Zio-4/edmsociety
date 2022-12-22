import React, { useState } from 'react'
import Searchbar from '../components/searchbar'


const events = () => {
    const [search, setSearch] = useState('')

  return (
    <div>
        <Searchbar value={search} setSearch={setSearch} width={'3/12'}/>
    </div>
  )
}

export default events