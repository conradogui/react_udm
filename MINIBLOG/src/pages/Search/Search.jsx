import React from 'react'

//hooks
import { useFetchDocuents } from '../../hooks/useFetchDocuments.jsx'
import { useQuery } from '../../hooks/useQuery.jsx'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")
  return (
    <div>
        <h2>Search</h2>
        <p>{search}</p>
    </div>
  )
}

export default Search