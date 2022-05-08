import { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import s from "./Searchbar.module.css";

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      return toast("Enter your search query, please.");
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter movie name..."
          value={searchQuery}
          onChange={handleChange}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
        <span className={s.label}></span>
      </form>
    </header>
  );
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
