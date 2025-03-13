import React , { createContext, useState, useEffect, useContext } from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)


export const MovieProvider =({children})=>{

    const [favs, setFavs] = useState([])

    useEffect(()=>{
        const storedFavs = localStorage.getItem('favs')
        if(storedFavs){
            setFavs(JSON.parse(storedFavs))
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('favs', JSON.stringify(favs))
    },[favs])

    const addToFavs = (movie)=>{
        setFavs(prev=> [...prev, movie])
    }

    const removeFromFavs = (movieId)=>{
        setFavs(prev=> prev.filter(movie=>movie.id !== movieId))
    }

    const isFav = (movieId)=> {
        return favs.some(movie => movie.id ===  movieId)
    }

    const value = {
        favs,
        addToFavs,
        removeFromFavs,
        isFav
    }


    return(
    <MovieContext.Provider value={value} >
        {children}
    </MovieContext.Provider>
    )
}