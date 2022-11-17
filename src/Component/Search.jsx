import React, { useContext } from 'react'
import { AppContext } from './context';
import "./movie.css";
const Search = () => {
  const { search, setSearch, error } = useContext(AppContext);

  return (
    <>
      <div className="header">
        <h3>Lama Movie</h3>

        <div className="search-bar">
          <input type="text" placeholder='search here' value={search} onChange={(e) => {
            setSearch(e.target.value)
          }} />
        </div>

        <p>{error.error && error.msg}</p>
      </div>


    </>
  )
}

export default Search