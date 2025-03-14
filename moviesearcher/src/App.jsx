import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MovieCard from './Components/MovieCard'
import Home from './Pages/Home';
import Favs from './Pages/Favs';
import Navbar from './Components/Navbar'
import { MovieProvider } from './Context/MovieContext';
import './css/App.css'

function App() {
  return (
    <>
    <MovieProvider>
      <Navbar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/movie/:id' element={<MovieCard/>}/>
      </Routes>
    </main>
    </MovieProvider>
    </>
  );
}


export default App
