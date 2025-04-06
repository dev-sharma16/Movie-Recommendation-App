import React, { createContext, useState } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) =>{
    const storedList = JSON.parse(localStorage.getItem("watchlist"))
    const [watchlist, setWatchlist] = useState(storedList)

    const addToWatchlist = (movie) => {
        if(!watchlist.some((item)=> item.id === movie.id)){
            setWatchlist([...watchlist,movie])
        }
    }

    const removeFromWatchlist = (id) => {
        setWatchlist(watchlist.filter((movie) => movie.id !== id));
    };

    return(
        <WatchlistContext.Provider value = {{watchlist, addToWatchlist, removeFromWatchlist}}>
            { children }
        </WatchlistContext.Provider>
    )

}     