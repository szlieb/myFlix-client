import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movie, setMovies] = useState([
    {
      id: 1,
      title: "Blazing Saddles",
      image:
        "https://m.media-amazon.com/images/M/MV5BZGZmMWE1MDYtNzAyNC00MDMzLTgzZjQtNTQ5NjYzN2E4MzkzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY209_CR1,0,140,209_AL_.jpgg",
      director: "Mell Brooks",
      genre: "Comedy"
    },
    {
      id: 2, 
      title: "Lucky Number SLevin",
      image:
        "https://m.media-amazon.com/images/M/MV5BZjczMWI1YWMtYTZjOS00ZDc5LWE2MWItMTY3ZGUxNzFkNjJmL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UX100_CR0,0,100,148_.jpg",
      director: "Paul McGuigan",
      genre: "Thriller"
    },
    {
      id: 3,
      title: "Léon The Professional",
      image:
        "https://m.media-amazon.com/images/M/MV5BOTgyMWQ0ZWUtN2Q2MS00NmY0LWI3OWMtNjFkMzZlNDZjNTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX67_CR0,0,67,98_AL_.jpg",
      director: "Luc Besson",
      genre: "Action"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
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
