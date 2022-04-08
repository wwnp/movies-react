import React from 'react'
// import { img } from '../images/notfound.png'
import { Link } from 'react-router-dom';

const notAvailable = 'N/A'
export const Card = props => {
  const {
    Poster: poster,
    Title: title,
    Year: year,
    Type: type,
    imdbID
  } = props
  return (
    <div className="card" >
      <div className="card-image">
        <img
          src={
            poster === notAvailable
              ? `https://via.placeholder.com/252x372?text=${title}`
              : poster
          }
          className={'card-img'}
          alt={title}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{year}</p>
        <p>{type}</p>
      </div>
      <div className="card-action">
        <Link className='btn deep-purple white-text' to={"/single/" + imdbID}>More info...</Link>
      </div>
    </div>
    // </div>
  )
}