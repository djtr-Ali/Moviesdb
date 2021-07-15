import { createReducer } from "@reduxjs/toolkit";

const initialState = ({
  movies:[],
  fav:[],
})

const userReducer = createReducer(initialState , (builder)=>{
  builder.addCase("MOVIES_SUCCESS",(state,action)=>{
    state.movies = action.payload
  })
  builder.addCase("MARK_FAV" , (state,action)=>{
    let count = 0;
    state.movies.map((mov)=>{
      if(mov.id === action.payload){
       return state.fav[count] = !state.fav[count];
      }
      count = count+1;
    })
    
  })

})

export default userReducer