import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesCast } from "../../API/Api";
import s from "./Cast.module.css";

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMoviesCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast.length ? (
        <ul className={s.list}>
          {cast.map(
            (element) =>
              element.profile_path && (
                <li className={s.item} key={element.id}>
                  <img
                    className={s.image}
                    src={`https://image.tmdb.org/t/p/w200${element.profile_path}`}
                    alt={element.name}
                  />
                  <h3>{element.name}</h3>
                  <p>{element.character}</p>
                </li>
              )
          )}
        </ul>
      ) : (
        <p>There is no information about the cast.</p>
      )}
    </>
  );
}
