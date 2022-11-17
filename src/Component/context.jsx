//context ma 3 ota kurahunch
// context (jun chae as a data store ko rup ma kaam garcha)
// provider ()
// consumer ()

import React, { useContext, useEffect, useState} from "react";

const AppContext = React.createContext();
  // yesma chae sab data haru store huncha 
  export const Api_Url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppProvider = ({ children }) =>  //(App provider vaneko chae delivery boy ko rup ma huncha jasle chae AppContext ma vako kura haru deliever garchan )
{
    const [Loading, isLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState({ msg: "", error: "false" })
    const [search, setSearch]= useState("titanic");
   
    const getMovie = async (url) => {
       isLoading(true)
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                isLoading(false);
                setError({ error:false,  msg:""})
                setMovie(data.Search)
                
            }
            else {
                isLoading(true);
                setError({ msg: data.Error, error:true})
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
       let timeOut= setTimeout(()=>//its for debouncing 
        {
            getMovie(`${Api_Url}&s=${search}`);

        }, 800)
        return ()=> clearTimeout(timeOut);   //useEffect le euta function matra ligcha tyo chae clearTime out ho
       
    }, [search])

    // yo chae global custom hooks ho 
    

    return (<>
        <AppContext.Provider value={{Loading, movie, error, search, setSearch}}>
            {children}

        </AppContext.Provider>
        

    </>)
}
// const useGlobalContext= ()=>   
//     {
//        return useContext(AppContext);
//     }

export {  AppProvider, AppContext };