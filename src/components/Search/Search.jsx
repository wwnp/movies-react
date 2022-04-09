import React from "react";
import { SEARCH_MIN, types } from "../../config";
import { Filter } from "../Filter";

const ENTER = "Enter";

export const Search = (props) => {
  const {
    search,
    handleUpdate,
    setSearch,
    type,
    setType
  } = props

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
                      if (search.length >= SEARCH_MIN) {
                        handleUpdate(e.target.value)
                        setType(e.target.value);
                      } else {
                        alert(`At least ${SEARCH_MIN} symbols`)
                      }
                    }}
                  />
                  <span>{typeName}</span>
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <Filter types={types} handleUpdate={handleUpdate} type={type} setType={setType} search={search}></Filter>
    </>
  );
};
