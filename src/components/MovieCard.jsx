import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { WatchlistContext } from "../context/WatchlistContext";

const MovieCard = ({ 
    id ,
    image = "https://via.placeholder.com/300x450?text=Movie+Poster", 
    title = "Movie Title", 
    rating = "N/A", 
    fullMovieData,
    isInWatchlist=false,
    onAddToWatchlist = () => alert("Added to Watchlist") ,
    onRemoveFromWatchlist = () => alert("Removed from Watchlist") 
    }) => {

    const navigate = useNavigate()
    const { addToWatchlist , removeFromWatchlist} = useContext(WatchlistContext)

    const handleCardClick=()=>{
        navigate(`/movies/${id}`)
    }
    const handleWatchlistClick  = (e) =>{
        e.stopPropagation()
        if (isInWatchlist) {
            removeFromWatchlist(id); 
            onRemoveFromWatchlist();
        } else {
            addToWatchlist(fullMovieData); 
            onAddToWatchlist()
        }
    }
    // const handleAddToWatchlist = () => {
    //     console.log("Movie ID:", id);
    //     onAddToWatchlist();
    // };

    return (
        <div onClick={handleCardClick} className="bg-gray-900 text-white rounded-xl shadow-md overflow-hidden w-52 hover:scale-105 hover:shadow-[0_0_15px_4px_rgba(220,38,38,0.6)] transition-all duration-300">
        {/* Movie Poster */}
        <img src={image} alt={title} className="w-full h-64 object-cover" />
  
        {/* Movie Details */}
        <div className="p-3 flex flex-col gap-2">
          <h2 className="text-lg font-semibold truncate">{title}</h2>
  
          {/* Rating */}
          <div className="flex items-center text-yellow-400 font-medium text-sm">
            ⭐ {rating}/10
          </div>
  
          {/* Add to Watchlist Button */}
          <button
            onClick={(e) => {
                e.stopPropagation(); 
                // onAddToWatchlist();
                handleWatchlistClick (e)
              }}
            className="mt-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-md transition duration-200 text-sm"
          >
           {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      </div>
    );
  };

export default MovieCard