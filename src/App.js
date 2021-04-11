import './App.css';
import React , { useState } from 'react'
import MovieList from './components/MovieList';
import Data from './components/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Add from './components/Add';
import Rating from './components/Rating';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import MoviePage from './components/MoviePage';

function App() {
  const [movies , setMovies] = React.useState(Data)
  const [search , setSearch] = React.useState("")
  const [newMovie, setNewMovie] = React.useState(
  {  title:"",
    description:"",
    Image:"",
    rate:"",}
  )
  const AddMovie = (newMovie) =>{
    setMovies(
      [...movies, newMovie]
    )
  }
  const [rate, setRate] = React.useState(1)
  return (
    <BrowserRouter>
    <div className="App">
      
      <Menu  search={search} setSearch={setSearch}/>

      <Add AddMovie={AddMovie} newMovie={newMovie} setNewMovie={setNewMovie}/>
      <Rating rate={rate} setRate={setRate}/>
      <Switch>
      <Route exact path="/" render={()=><MovieList movies={movies} setMovies={setMovies} search={search} rate={rate} />} />
   
    <Route path="/MoviePage/:id" render={(props)=> <MoviePage {...props} movies={movies}/>} />
    </Switch>
   </div>
    </BrowserRouter>
  );
}

export default App;
