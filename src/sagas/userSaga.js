import { put, takeEvery } from 'redux-saga/effects'

const getMoviesData = async () => {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1");
  const result = res.json();
  return result
 }

function* fetchUser() {
   try {
      const movieData = yield getMoviesData()
      yield put({type:"MOVIES_SUCCESS" ,payload:movieData.results})
   } catch (e) {
     console.log(e);
   }
}

function* userSaga() {
  yield takeEvery("GET_MOVIES", fetchUser);
}

export default userSaga;