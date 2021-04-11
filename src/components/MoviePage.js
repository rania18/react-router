import React,{useState,useEffect} from "react";
import '../App.css'

function MoviePage(props) {
    const [movie,setMovie]= useState(null)
    useEffect(() => { setMovie(props.movies.filter((el) =>el.id === props.match.params.id)[0])})
 
// const  newarray=movies.find((el) => el.id.toString() === match.params.id);
 return (
     <div>
     {movie && <div
      className="movie-wrapper"
      style={{
        backgroundImage: `url(${movie.Image})`,
        backgroundPosition: "100% 60%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container ">
        <div className="row">
          <div className="col-lg-5">
            <div className="movie-content">
              <h1 className="movie-title" style={{color: "white"}}>{movie.title}</h1>
              <p className="movie-description" style={{color: "white"}}>{movie.description}</p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="movie-trailer">
              <iframe
                title="trailer"
                width="500"
                height="350"
                src={movie.trailer}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>}
   </div>
  );
}

export default MoviePage;
