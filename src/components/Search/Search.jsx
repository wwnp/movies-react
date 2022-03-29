import React, { useEffect } from "react";
import { useState } from "react";
import { LogicSearch } from "./LogicSearch";
import { HandleRadios } from "./LogicSearch";
const ENTER = "Enter";
const types = {
  __all__: "all",
  __series__: "series",
  __movie__: "movie",
  __episode__: "episode",
};
export const Search = (props) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState(types.__all__);
  const { handleUpdate } = LogicSearch(
    props.setMovies,
    search,
    props.setLoading,
    type,
    setType,
  );
  return (
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
            className="btn blue right"
            onClick={(e) => handleUpdate(type)}
          >
            Send
          </button>
        </div>
      </div>
      <div className="left-align">
        {Object.keys(types).map((key, index) => {
          const typeName =
            types[key].toString().charAt(0).toUpperCase() +
            types[key].toString().slice(1);
          let colSize = 4;
          if (Object.keys(types).length > 3) {
            colSize = 3;
          }
          return (
            <div className={`col s${colSize}`} key={index}>
              <label>
                <input
                  className="with-gap"
                  name="type"
                  type="radio"
                  value={types[key]}
                  checked={type === types[key]}
                  onChange={(e) => {
                    // doFetchRadio(e)
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
  );
};
