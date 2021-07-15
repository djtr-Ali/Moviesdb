import './movies.css';
import { Link } from "react-router-dom";
import{useDispatch} from "react-redux";

function Movies(props){
  const dispatch = useDispatch();
  return <>
    <div className="main_container">
      <img src={"http://image.tmdb.org/t/p/w200"+props.poster} alt="Photo"></img>
      <h1>{props.title}</h1>
      <div className="movie_overview">
        <h3>Overview : </h3>
        <p>{props.desc.slice(0,200)} <strong><Link to={`/detail/${props.movie_id}`}>...Read more </Link></strong> </p>
      </div>
      <div className="pre_fav">
        <button className="watch_preview"><strong><Link to={`/preview`}>🎬 Watch Preview </Link></strong></button>
        <button onClick={()=>dispatch({type:"MARK_FAV",payload:props.movie_id})} className="favourite"><h1>{props.fav?"⭐":"✩"}</h1></button>
      </div>
    </div>
  </>
}


export default Movies;
