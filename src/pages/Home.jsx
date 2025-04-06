import React, {useEffect, useState}from "react";
import MovieCard from "../components/MovieCard";

const Home = () => {

    const [suggestedMovies,setSuggestedMovies] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchSuggestions = async ()=>{
      try{
       
        const res = await fetch("https://www.freetestapi.com/api/v1/movies")
        const data = await res.json()
        
        const shuffled = [...data].sort(()=> 0.5 - Math.random())
        const selected = shuffled.slice(0,6)
          
        setSuggestedMovies(selected)
        setLoading(false)

      }catch(error){

        console.log("Cant fetch Data..! : ",error);
        setLoading(false)
        
      }
    }

    useEffect(() => {
      fetchSuggestions();
    }, []);

    if (loading) return <h2 className="text-white text-center mt-10 text-2xl">Loading suggestions...</h2>;

    return (
      <>
        <div className="bg-gray-800 w-screen h-screen" >
          <h1 className="text-white text-4xl font-bold text-center py-6" >Welcome User..!</h1>
          <h4 className="text-white text-3xl mx-10  " >Recommendations :</h4>
          {/*Here gonna display cartd comp dynamicaly*/}
          <div className="bg-gray-800 px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
               {/* <MovieCard
                 id={Date.now()}
                 image="https://placehold.co/300x450"
                 title="Inception"
                 rating={8.8}
                 onAddToWatchlist={() => alert('Added to Watchlist')}
               /> */}
             {suggestedMovies.map((movie) => (
                 <MovieCard
                   key={movie.id}
                   id={movie.id}
                   image={movie.poster}
                   title={movie.title}
                   rating={movie.rating}
                   fullMovieData={movie}
                 />
             ))}
          </div>
        </div>
      </>
    )
  };
  
export default Home;