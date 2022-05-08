import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../API/Api";
import s from "./Reviews.module.css";

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return reviews.length ? (
    <ul className={s.list}>
      {reviews.map((review) => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>There are no reviews yet.</p>
  );
}
