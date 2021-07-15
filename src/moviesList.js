import "./moviesList.css";
import Movies from "./component/movies.js";
import {useSelector} from "react-redux";


function MoviesList(){
  const movie = useSelector((state)=>state);
  console.log(movie);
  return (
    <>    
       <div className="movies">
          {movie.movies.map(((mov,index)=>{
            return <Movies poster={mov.poster_path} title={mov.title} desc={mov.overview} movie_id={mov.id} fav={movie.fav[index]}/>
          }))}
      </div>
    </>
    )
}

export default MoviesList;