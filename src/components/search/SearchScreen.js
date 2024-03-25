import React from "react";

import queryString from 'query-string';
import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";

export const SearchScreen = () => {
const location = useLocation ();

const {q = ''} = queryString.parse(location.search);


  const heroesFiltered = heroes;
  const navigate = useNavigate(); // Obtener la función de navegación

  const [formValues, handleInputChange] = useForm({
    searchText: q
  });
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?query=${searchText}`); // Navegar a la ruta con el query string
  };

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn m-1 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
