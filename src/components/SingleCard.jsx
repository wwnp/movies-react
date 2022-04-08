import React from 'react'
import { useNavigate } from 'react-router-dom';

export const SingleCard = (props) => {
  const {
    Actors: actors,
    Awards: awards,
    BoxOffice: boxOffice,
    Country: country,
    DVD: dvd,
    Director: director,
    Genre: genre,
    Language: language,
    Metascore: metascore,
    Plot: plot,
    Poster: poster,
    Production: production,
    Rated: rated,
    Ratings: ratings,
    Released: released,
    Response: response,
    Runtime: runtime,
    Title: title,
    Type: type,
    Website: website,
    Writer: writer,
    Year: year,
    imdbID,
    imdbRating,
    imdbVotes
  } = props.single
  const navigate = useNavigate()
  return (
    <>
      <div className="col s6" style={{ display: 'flex', justifyContent: 'center', borderRight: '1px solid #ccc' }}><img src={poster} alt="poster" /></div>
      <div className="col s6">
        <h1>{title}</h1>
        <p>{plot}</p>
        <p>Year: {year}</p>
        <hr style={{ margin: '1rem 0' }} />
        <button className='btn purple' onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  )
}