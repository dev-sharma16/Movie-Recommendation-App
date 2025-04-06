import React, { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { WatchlistContext } from "../context/WatchlistContext";
import { useEffect } from "react";

const WatchList = () => {

  const {watchlist} = useContext(WatchlistContext)

  const storedList = JSON.parse(localStorage.getItem("watchList")) || []
  

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <>
      <div className="bg-gray-800 w-screen h-screen" >
        <h1 className="text-white text-4xl font-bold text-center py-6" >Your Watch List..!</h1>
        {/*Here gonna display cartd comp dynamicaly*/}
        <div className="bg-gray-800 px-10 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {/* <MovieCard
            id={Date.now()}
            image="https://placehold.co/300x450"
            title="Inception"
            rating={8.8}
            onAddToWatchlist={() => alert('Added to Watchlist')}
          /> */}
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              image={movie.poster}
              title={movie.title}
              rating={movie.rating}
              fullMovieData={movie}
              isInWatchlist={true}
              onRemoveFromWatchlist ={() => alert(`Removed ${movie.title} from Watchlist`)}
            />
          ))}
        </div>
      </div>
    </>
  )
};
  
export default WatchList;