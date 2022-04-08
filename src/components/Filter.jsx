import React from 'react'
import { SEARCH_MIN } from '../config';

export const Filter = (props) => {
  const { types, handleUpdate, type, setType, search } = props
  return (
    <div className='main__filter-web ' >
      <div className="card">
        <ul>
          {Object.keys(types).map((key, index) => {
            const typeName =
              types[key].toString().charAt(0).toUpperCase() +
              types[key].toString().slice(1);
            let colSize = 3;
            if (Object.keys(types).length > 3) {
              colSize = 2;
            }
            return (
              <div className={`col s${colSize}`} key={index} >
                <label>
                  <input
                    name="type2"
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
                  <span className='filter__inputSpan'>{typeName}</span>
                </label>
              </div>
            );
          })}
        </ul>
      </div>
    </div >
  )
}