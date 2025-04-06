import React ,{useState,useEffect}from "react";
import { useParams } from "react-router-dom";

// const MovieDetails = ({ movie }) => {
//   if (!movie) return <div className="text-white">Loading...</div>;

const MovieDetails = () =>{
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchMovieDetails = async () => {
    try {
      const res = await fetch(`https://www.freetestapi.com/api/v1/movies/${id}`);
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movie details:", error);
      setLoading(false);
    }
}

useEffect(() => {
  fetchMovieDetails();
}, [id]);

if (loading) return <h2 className="text-white text-center mt-10 text-2xl">Loading movie...</h2>;
if (!movie) return <h2 className="text-white text-center mt-10 text-2xl">Movie not found</h2>;


  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4 py-10">
      <div className="bg-gray-800 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-10 max-w-5xl w-full p-6">
        {/* Poster */}
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-[220px] h-[360px] object-cover rounded-lg shadow-md"
        />

        {/* Details Section */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <h1 className="text-4xl font-bold text-red-500">{movie.title}</h1>
          <p className="text-sm text-gray-400">
            {movie.year} • {movie.runtime} min • Rated: {movie.rating}/10 ⭐
          </p>
          <p className="text-sm text-gray-400">
            Genre: <span className="text-white">{movie.genre.join(", ")}</span>
          </p>
          <p className="text-base leading-relaxed text-gray-200">{movie.plot}</p>

          <div className="text-sm space-y-1 mt-4">
            <p><span className="font-semibold text-white">Director:</span> {movie.director}</p>
            <p><span className="font-semibold text-white">Actors:</span> {movie.actors.join(", ")}</p>
            <p><span className="font-semibold text-white">Country:</span> {movie.country}</p>
            <p><span className="font-semibold text-white">Language:</span> {movie.language}</p>
            <p><span className="font-semibold text-white">Box Office:</span> {movie.boxOffice}</p>
            <p><span className="font-semibold text-white">Awards:</span> {movie.awards}</p>
            <p><span className="font-semibold text-white">Production:</span> {movie.production}</p>
            <p>
              <a
                href={movie.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 underline"
              >
                Visit Official Website
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
