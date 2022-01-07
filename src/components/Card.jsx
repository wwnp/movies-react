import React from 'react'
export const Card = props => {
  const {
    Poster: poster,
    Title: title,
    Year: year,
    Type: type,
    imdbID
  } = props // rename keys
  return (
    // <div className="col s12 m3">
      <div className="card" >
        {/* <div className="card" style={{ minHeight: '550px' }}> */}
        <div className="card-image">
          <img src={poster} alt={title} />
          {/* <img src={poster} alt={title} style={{ height: '300px' }} /> */}
        </div>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>{year}</p>
          <p>{type}</p>
        </div>
        <div className="card-action">
          <a href={"/movies/" + imdbID}>This is a link</a>
        </div>
      </div>
    // </div>
  )
}