import react from "react";
import "./detailPage.css";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

function DetailPage(){
  let movies = {};
  const {id} = useParams();
  const movie = useSelector((state)=>state);
  movie.movies.map((mov)=>{
    if(mov.id == id){
      movies = mov
    }
  });
  return (
  <>
  <div className="main_detail">
      <div className="detailPoster">
        <img src={"https://image.tmdb.org/t/p/w300/"+movies.poster_path} alt="pic"></img>
      </div>
      <div className="detail_content">
      <h1>{movies.title}</h1>
      <p>{movies.overview}</p>
      <h4>Release Date : {movies.release_date}</h4>
      <h4>Popularity : {movies.popularity}</h4>
      <h4>Rating :{movies.vote_average}</h4>
      <h4></h4>
    </div>
    </div>
  </>
  )
}
export default DetailPage