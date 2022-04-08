import React, { useState } from 'react'

export const Filter = (props) => {
  const { types, handleUpdate, type, setType } = props
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
                      handleUpdate(e.target.value)
                      setType(e.target.value);
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
