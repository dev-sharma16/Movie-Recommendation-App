import React, {useState,useEffect,useContext} from "react";
import MovieCard from "../components/MovieCard";
import { SearchContext } from "../context/SearchContext";

const MovieList = () => {

  
  const[movies,setMovies] = useState([]);
  const[loading,setLoading] = useState(true)
  
  const fetchMovies = async ()=>{
    try{
      
      const res = await fetch("https://www.freetestapi.com/api/v1/movies")
      const data = await res.json()
      setMovies(data)
      console.log(data);
      setLoading(false);
      
    }catch(error){
      
      console.log("Error Fetching movies : ",error)
      setLoading(false)
      
    }
  }

  const { searchTerm } = useContext(SearchContext)
  const filteredMovies = searchTerm ? movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase())) : movies
  
  useEffect(()=>{ 
    fetchMovies()
  },[])
  
  
   if(loading) return <h2 className="text-white text-center mt-10 text-2xl">Loading movies...</h2>

  return (
    <>
      <div className="bg-gray-800 w-screen h-screen" >
        <h1 className="text-white text-4xl font-bold text-center py-6" >All the Movies..!</h1>
        <div className="bg-gray-800 px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {/* <MovieCard
            id={Date.now()}
            image="https://placehold.co/300x450"
            title="Inception"
            rating={8.8}
            onAddToWatchlist={() => alert('Added to Watchlist')}
          /> */}
          {filteredMovies.map((movie)=>{
             return(
              <MovieCard
                key={movie.id}
                id={movie.id}
                image={movie.poster}
                title={movie.title}
                rating={movie.rating}
                fullMovieData={movie}
                onAddToWatchlist={() => alert(`Added ${movie.title} to Watchlist`)}
              />
             )
          })}
        </div>
      </div>
    </>
  )
  };
  
export default MovieList;