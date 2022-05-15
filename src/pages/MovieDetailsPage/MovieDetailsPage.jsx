import { useState, useEffect, Suspense } from "react";
import {
  useParams,
  useLocation,
  useNavigate,
  NavLink,
  Outlet,
} from "react-router-dom";
import { fetchMoviesById } from "../../API/Api";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchMoviesById(movieId)
      .then((movie) => {
        setMovie(movie);
        setLoading(false);
      })
      .catch((error) => {
        toast(`${error}`);
        setLoading(false);
      });
  }, [movieId]);

  const goBack = () => {
    navigate(
      location.state
        ? `${location.state.from.pathname}${location.state.from.search}`
        : "/"
    );
  };

  return (
    <>
      <button className={s.button} type="button" onClick={goBack}>
        Go back
      </button>
      <br />
      {loading && <Loader />}
      {movie && (
        <>
          <div className={s.card}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
            />
            <div>
              <h2>{movie.title ? movie.title : movie.name}</h2>
              <p>User score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres &&
                movie.genres.map((genre) => (
                  <span className={s.genre} key={genre.id}>
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          <hr />

          <h3 className={s.title}> Additional information</h3>
          <NavLink
            to={`cast`}
            state={location.state ? { from: location.state.from } : null}
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            Cast
          </NavLink>
          <NavLink
            to={`reviews`}
            state={location.state ? { from: location.state.from } : null}
            className={({ isActive }) => (isActive ? s.active : s.inactive)}
          >
            Reviews
          </NavLink>

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
