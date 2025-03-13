import React, { useState, useEffect } from 'react'
import MovieCard from '../Components/MovieCard'
import { getPopularMovies, searchMovies } from '../Services/Api'
import '../css/Home.css'

function Home() {

const [search, setSearch] = useState('')
const [movies, setMovies] = useState([])
const [error, setError] = useState('')
const [loading, setLoading] = useState(true)


const HandleSearch= async(e)=>{
  e.preventDefault();
  if (!search.trim()) return
  if(loading) return
  setLoading(true)
  try {
    const searchResults = await searchMovies(search)
    setMovies(searchResults)  
    setError(null)
  } catch (error) {
    setError('Error fetching movies')
    console.log(error)
  }finally{
    setLoading(false)
  }
}

useEffect(() => {
      const loadPopularMovies = async () => {
      try {
        const popularmovies = await getPopularMovies()
        setMovies(popularmovies)
      } catch (error) {
        console.log(error)
        setError('Error fetching movies')
      }
        finally {
        setLoading(false)
        }
      }
      loadPopularMovies()
}, [])

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
        {error && <div className="error-message">{error}</div>}

          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <div className="movies-grid">
              {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))}
            </div>
          )}
    </div>
  )
}

export default Home
