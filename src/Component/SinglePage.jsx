import {React, useEffect, useState} from 'react'

import { NavLink, useParams } from 'react-router-dom'
import "./movie.css";
import {Api_Url} from './context';

const SinglePage = () => {
  const {id}=useParams();
  const [Loading, isLoading] = useState(true);
  const [movie, setMovie] = useState([]);
 
  const getMovie = async (url) => {
    if(isLoading)
      try {
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          if (data.Response === "True") {
              isLoading(false);
              setMovie(data)
          }
          else {
              isLoading(true);
              
          }
      }
      catch (error) {
          console.log(error)
      }
  }
 
  useEffect(() => {
     let timeOut= setTimeout(()=>//its for debouncing 
      {
          getMovie(`${Api_Url}&i=${id}`);

      }, 2000)
      return ()=> clearTimeout(timeOut);   //useEffect le euta function matra ligcha tyo chae clearTime out ho
     
  }, [id])
  if(Loading)
  {
    return (
      <>
      <div className="loading-section">
        <div className="loading">Searching...</div>
      </div>
      </>
    )
  }
//useParams le chae url ko pachadi j pani id huncha tyo show garcha 
  
  return (
   <>
   <div className="s-page">
    <div className="page">
      <div className="page-flex">
        <img src={movie.Poster} alt="" />
       
      </div>
      <div className="page-content">
        <p>Title:{movie.Title}</p>
        <p>Category:  {movie.Genre}</p>
        <p>Released:  {movie.Released} </p>
        <p>Languages: {movie.Language}</p>
        <NavLink to="/">Go Back</NavLink>
      </div>
    </div>
   </div>
   </>
   
  )
}

export default SinglePage