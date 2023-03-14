import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movie, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://zalmy-myflix.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const moviesFromApi = data.map((doc) => {
                    return {
                        image: doc.Imgpath,
                        title: doc.Title,
                        genre: doc.Genre,
                        director: doc.Director,
                        description: doc.Description,
                        id: doc._id,
                        Featured: doc.Featured,
                    };
                });

                setMovies(moviesFromApi);
            });
    }, []);

    if (selectedMovie) {
        return (
            <MovieView
                movie={selectedMovie}
                onBackClick={() => setSelectedMovie(null)}
            />
        );
    }

    if (movie.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movie.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                />
            ))}
        </div>
    );
};
