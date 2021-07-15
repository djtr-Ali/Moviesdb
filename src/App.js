import react , { useEffect } from "react";
import './App.css';
import { Route , Switch } from "react-router-dom";
import MoviesList from "./moviesList.js";
import DetailPage from "./DetailPage";
import PreviewPage from "./previewPage";
import { useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch({type:"GET_MOVIES"})
  },[])
  
  return (
  <>
    <div className='main_header'>
      <h1>🎥 MOVIES DB</h1>
    </div>
  
    <Switch>
      <Route exact path = '/' component = {MoviesList} />
      <Route exact path = '/detail/:id' component = {DetailPage}/>
      <Route exact path = '/preview' component = {PreviewPage} />
    </Switch>
  </>
  )
}

export default App;
