import { useState, useEffect } from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Searchbar from "../../components/Searchbar/Searchbar";
import Loader from "../../components/Loader/Loader";
import { fetchMoviesSearch } from "../../API/Api";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("query") ?? ""
  );
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleFormSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setSearchParams({ query: searchQuery });
    setData([]);
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    fetchMoviesSearch(searchQuery).then((data) => {
      if (data.length === 0) {
        toast(
          `Sorry, the movie with the title ${searchQuery}is not found. Enter another name`
        );
      }
      setData(data);
      setLoading(false);
    });
  }, [searchQuery]);

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {loading && <Loader />}
      {data && (
        <ul>
          {data.map((data) => (
            <li key={data.id}>
              <Link to={`${data.id}`} state={{ from: location }}>
                {data.title ? data.title : data.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
