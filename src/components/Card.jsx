import React from 'react'
// import { img } from '../images/notfound.png'
const notAvailable = 'N/A'
export const Card = props => {
  const {
    Poster: poster,
    Title: title,
    Year: year,
    Type: type,
    imdbID
  } = props // rename keys
  return (
    <div className="card" >
      <div className="card-image">
        <img
          src={
            poster === notAvailable
              ? `https://via.placeholder.com/252x372?text=${title}`
              : poster
          }
          alt={title}
        />
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