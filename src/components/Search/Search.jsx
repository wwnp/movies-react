import React, { useEffect } from "react";
import { useState } from "react";
import { API_KEY } from '../../App'
import { types } from "../../config";
import { Filter } from "../Filter";

const ENTER = "Enter";

export const Search = (props) => {
  const { setMovies, setLoading } = props
  const [search, setSearch] = useState("");
  const [type, setType] = useState(types.__all__);

  const handleUpdate = (type) => {
    let url = `http://www.omdbapi.com/?apikey=${API_KEY}`
    if (search) {
      url += `&s=${search}`
    }
    if (type !== 'all') {
      url += `&type=${type}`
    }
    if (search.length >= 2) {
      setLoading(true)
      fetch(url)
        .then(response => response.json())
        .then(json => {
          if (json.Error) {
            setMovies({
              error: json.Error,
            })
            setTimeout(() => {
              setLoading(false)
            }, 300)
          } else {
            setMovies(json.Search)
            setTimeout(() => {
              setLoading(false)
            }, 300)
          }
        })
    } else {
      alert('At least 2 symbols')
    }
  }

  return (
    <>
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              placeholder="Search"
              type="search"
              className="validate"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === ENTER) {
                  handleUpdate(type);
                }
              }}
            />
            <button
              className="btn deep-purple left"
              onClick={(e) => handleUpdate(type)}
            >
              Send
            </button>
          </div>
        </div>
        <div className="right-align main__filter-mobile">
          {Object.keys(types).map((key, index) => {
            const typeName =
              types[key].toString().charAt(0).toUpperCase() +
              types[key].toString().slice(1);
            let colSize = 3;
            if (Object.keys(types).length > 3) {
              colSize = 2;
            }
            return (
              <div className={`col s${colSize} mt-1`} key={index}>
                <label>
                  <input
                    className="with-gap"
                    name="type"
                    type="radio"
                    value={types[key]}
                    checked={type === types[key]}
                    onChange={(e) => {
                      handleUpdate(e.target.value)
                      setType(e.target.value);
                    }}
                  />
                  <span>{typeName}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <Filter types={types} handleUpdate={handleUpdate} type={type} setType={setType}></Filter>
    </>
  );
};
