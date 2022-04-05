import React from 'react'
import { LogicMain } from './LogicMain'
import { List } from '../../components/List'
import { Preloader } from '../../components/Preloader'
import { Search } from '../../components/Search/Search'
export const Main = props => {
  const { movies, setMovies, loading, setLoading } = LogicMain()
  return (
    <main className='content container'>
      <Search setMovies={setMovies} setLoading={setLoading}></Search>
      {
        loading
          ? <Preloader color='blue'></Preloader>
          : (
            movies?.error
              ? <h1>{movies.error}</h1>
              : <List list={movies}></List>
          )
      }
    </main >
  )
}