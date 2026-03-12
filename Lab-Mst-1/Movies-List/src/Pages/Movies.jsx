import { Link } from "react-router-dom";

const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "Interstellar" },
  { id: 3, title: "Avatar" },
];

function Movies() {
  return (
    <div>
      <h2>Movies</h2>

      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Movies;
