import React, { useState } from "react";
import { useEffect } from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

// 93021bae
//http://www.omdbapi.com/?i=tt3896198&apikey=93021bae

const API_URL = "http://www.omdbapi.com?apikey=93021bae";

// const movie1 = {
//     "Title": "The Avengers",
//     "Year": "2012",
//     "imdbID": "tt0848228",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies(); // Replace "avengers" with your desired movie title.
        // This function will fetch movie data from OMDB API and log it to the console.
        // You can modify the searchMovies function to perform other actions as needed.
        // The API key is hardcoded in this example. You should replace it with your own API key.
        // Learn more about OMDb API: https://www.omdbapi.com/
    }, []);
    return (
        <div className="app">
            <h1>MovieLand</h1>


            <div className="search">
                <input
                    placeholder="Search For Movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}

                />

                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {
                            movies.map((movie) => (
                                <MovieCard movie={movie} />
                            ))
                        }
                    </div>
                ) : (
                    <div className=" empty">
                        <h2>No Movies Found</h2>
                    </div >
                )}

        </div >
    );

}

export default App;