import React, { useEffect, useState } from 'react'
import { List } from '../../components/List'
import { Preloader } from '../../components/Preloader'
import { Search } from '../../components/Search/Search'
import { API_KEY } from '../../App'

export const Main = props => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=warcraft`)
      .then(response => response.json())
      .then(json => {
        setMovies(json.Search)
      })
      .catch((error) => {
        setMovies({ error: error.message })
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 500)
      })
  }, [])

  return (
    <main className='content container'>
      <Search setMovies={setMovies} setLoading={setLoading}></Search>
      {
        loading
          ? <Preloader color='purple'></Preloader>
          : (
            movies?.error
              ? <h1>{movies.error}</h1>
              : <List list={movies}></List>
          )
      }
      {/* <Filter></Filter> */}
    </main >
  )
}