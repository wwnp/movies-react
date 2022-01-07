import React from 'react'
import { LogicMain } from './LogicMain'
import { List } from '../../components/List'
export const Main = props => {
  const { loading, movies } = LogicMain()
  return (
    <main className='content container'>
      {loading
        ? <h1>Loading...</h1>
        : <List list={movies}></List>
      }
    </main>
  )
}
// http://www.omdbapi.com/?apikey=[yourkey]&
// 79fb8a48