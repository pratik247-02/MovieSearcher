import React, { useState } from 'react'
import MovieCard from '../Components/MovieCard'

const HandleSearch=(e)=>{
    e.preventDefault();

}

function Home() {

const movies = []
const [search, setSearch] = useState('')

  return (

    <div className='home'>
        <form onSubmit={HandleSearch} className="search-form">
            <input type="text"
                   placeholder="Search for a movie" 
                   className='search-bar'
                   value={search}
                   onChange={(e)=> setSearch(e.target.value)}
                   onSubmit={HandleSearch}/>
            <button type="submit" 
                    className='search-button'>
                 SEARCH   
            </button>
        </form>
    <div className='movies-gird'>
      {movies.map((movie) => movie.title.toLowerCase().startswith(search) && (<MovieCard key={movie.id} />)
    
    )}
    </div>
    </div>
  )
}

export default Home
