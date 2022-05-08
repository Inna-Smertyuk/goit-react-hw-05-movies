import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader/PageHeader";
import { fetchTrendingMovies } from "../../API/Api";
import Loader from "../../components/Loader/Loader";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies().then((movies) => {
      setMovies(movies);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <PageHeader>Trending today</PageHeader>
      {loading && <Loader />}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title ? movie.title : movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
