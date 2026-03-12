import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Movie Listing App</h1>
      <Link to="/movies">Go to Movies</Link>
    </div>
  );
}

export default Home;
