import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext} from './context'
import "./movie.css" ;


const Movie = () => {
    const {movie}= useContext(AppContext)

    
  return (<>
       <div className="container">
        <div className="grid ">
    {movie.map ((current)=>
    {
        const {Title, imdbID, Poster }= current;
        const movieName= Title.substring(0,15);

        return <NavLink to= { `movie/${imdbID}`}>
         <div className="card">
            <div className="cardInfo">
                <h2>{movieName.length>=15? `${movieName}...`:movieName}</h2>
                <div className="photo">
                    <img src={Poster} alt="" srcset="" />
                </div>
            </div>
         </div>
         </NavLink>

        
    })}

   
   </div>
    </div>
    </>
   
  )
}

export default Movie